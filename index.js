//import path from 'path'
//import express from 'express'
//import markdown from 'markdown'
var express = require('express')
//var markdown = require("markdown").markdown;
var marked = require('marked')
var fs = require('fs')
var path = require('path')
var Url = require('url')
var toc = require('marked-toc')
var slugify = require('uslug');
let dir = 'docs/'


var renderer = new marked.Renderer();
renderer.heading = function (text, level, raw) { // 处理toc
  //var anchor = tocObj.add(text, level);
  //console.log(raw,text,level)
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    //+ raw.toLowerCase().replace(/[^\w]+/g, '-')
    //+ raw.replace(/\./, '').replace(/^s*|s*$/g,'-')
    + slugify(text, { allowedChars: '-' })
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

marked.setOptions({
  renderer: renderer
});




let app = express()

app.use(express.static('src'));

function getList(dir,req,res,next){
  let list = ''
  fs.readdir(dir, function (err, files) {
    if (err) {
      console.log(err)
      return
    }
    if(files.length == 0){
      list += '该目录下暂无文件～'
      //return
    }else{
      files.forEach(function (filename) {
        //console.log(filename)
        var stats = fs.statSync(path.join(dir, filename));
        if (stats.isDirectory()) {
          list += '<a href="javascript:;" data-type="dir" data-url="' + path.join(dir, filename) + '">目录' + filename + '/</a>'
          //console.log(filename+'/')
        } else {
          list += '<a href="javascript:;" data-type="file" data-url="' + path.join(dir, filename) + '">文档' + filename + '</a>'
          //console.log(filename)
        }


      })
    }
    

    res.status(200);  // 设置响应状态吗
    res.set({
      'Content-Type': 'text/json'
    });
    res.send({
      code: 1,
      data: list
    })
    next()

  })
}

app.get('/getList/*',function(req,res,next){
  
  var url = req.url
  console.log(url)
  if(url.indexOf('?') != -1){
    var directory = url.split('?')[1]
  }else{
    var directory = dir
  }
  console.log(directory)
  
  getList(directory,req,res,next);
  
})

app.get('/'+dir+'*',function(req,res,next){
  //console.log(req.url)

  

  var url = path.join(process.cwd(),req.url)
  fs.stat(url, function (err, stats) {
    if(err){
      console.log(err)
      return
    }
    if(stats.isDirectory()){
      //res.send('mulu')
      res.status(200);  // 设置响应状态吗
      res.set({
        'Content-Type': 'text/json'
      });
      res.send({
        code: 1,
        data: '没有找到文件！'
      })
    }else{
      fs.readFile(url, 'utf8',(err, data) => {
        if (err) throw err;
        //var html = markdown.toHTML(data)
        
        var t = toc(data)
        var tocHtml = '\n<div id="toc"> </div>\n\n'
                      +t;
        //console.log(t)
        //console.log(tocHtml)
        data = data.replace(/\[toc\]/i,tocHtml)
        var html = marked(data)
        //console.log(html);
        //console.log(data);
        res.status(200);  // 设置响应状态吗
        res.set({
          'Content-Type': 'text/json'
        });
        res.send({
          code: 1,
          data: html
        })
        //res.send(markdown.toHTML(data))
      });
    }
  })
  //console.log('*')
})

app.listen('3000',function(){
  console.log('success')
})