function Article() {
  this.created = new Date();
  
  Article.counter++;
  Article.lastDate = this.created;
}

Article.counter = 0;
Article.lastDate = null;
Article.showStats = function(){
    console.log('Всего: ' + Article.counter + ', Последняя: ' + Article.lastDate);
};

new Article();
new Article();

Article.showStats();