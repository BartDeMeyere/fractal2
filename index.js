var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio 
canvas.height = innerHeight * devicePixelRatio

canvas.style.width = 100 + "%"
canvas.style.height = 100 + "%"

var len = 800
var tree = []
var order = 8
var treecolor = "white"

function renderContent(){

    c.clearRect(0,0,canvas.width,canvas.height)

    for(var i = 0 ; i < tree.length ; i++){

        tree[i].draw()

    }
}

function CreateTree(){

    if(order === 0){

        console.log("done")
        return

    }else{

        setTimeout(CreateTree , 100)
    }

    if(tree.length === 0){

        var branch = new Branch(canvas.width/2 , canvas.height , canvas.width/2 , canvas.height - len , -Math.PI/2 , len , 20 , treecolor)
        tree.push(branch)
       

    }else{

        for(var i = tree.length - 1 ; i >= 0 ; i--){

            if(!tree[i].finished){

                if(order < 2){

                    tree.push(tree[i].newbranch(Math.PI/4 , "lime"))
                    tree.push(tree[i].newbranch(-Math.PI/4 , "lime"))

                }else{

                    tree.push(tree[i].newbranch(Math.PI/4 , "white"))
                    tree.push(tree[i].newbranch(-Math.PI/4 , "white"))
                }
                
           
            }

            tree[i].finished = true
        }
    }

    renderContent()

    order--
   
}

CreateTree()