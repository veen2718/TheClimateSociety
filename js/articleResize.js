 
        function resizeArticle(col,y,event){
            if(window.innerWidth > window.innerHeight){
            var row = document.getElementById(y)
            row.style.gridTemplateColumns = col}
        }
        function resizeArticleDefault(y,event){
            if(window.innerWidth > window.innerHeight){
            var row = document.getElementById(y)
            row.style.gridTemplateColumns = `1fr 1fr 1fr 1fr`
            }}
        xmax = 4
        ymax = 2
        for(let j = 0;j<3;j++){
            for(let i = 0;i<4;i++){
                var article = document.getElementById(`r${j+1}c${i+1}`)
                widths = [1,1,1,1]
                widths[i] = 1.2
                gtc = `${widths[0]}fr ${widths[1]}fr ${widths[2]}fr ${widths[3]}fr`
                article.addEventListener('mouseover',resizeArticle.bind(null,gtc,`row${j+1}`))
                article.addEventListener('mouseout',resizeArticleDefault.bind(null,`row${j+1}`))
            }
        }