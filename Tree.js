function Node(value){
  this.value = value;
  this.children = [];
}
function Tree(rootNode){
  this.root = rootNode;

  const addNode = (childNodes , parentNode)=>{
    parentNode.children.push(...childNodes);
  }
  const bfs = (graph , start)=>{

    let  queue = [];
    queue.push(start);
    let visited = [];
    visited[start] = true;
    let distanse = [];
    visited = true;
    while(queue.length >0){
      console.log("visited node"+visited);
      let node = queue.shift();
      console.log("remove node "+node+"from queue");
      for(let i = 1 ; i<graph[node].length;i++){
        if(graph[node][i]&&!visited[i]){
          visited = true;
          distanse[i]=distanse[node]+1;
          queue.push[i];
          console.log("visited node"+i+ ", setting its distance to " + distances[i] + " and adding it to the queue");

        }
      }
    }
  
    
  }
  return {
    addNode,root
  }

}

const root = new Node("A")
const bNode = new Node("B")
const cNode = new Node("C")
const dNode = new Node("D")
const eNode = new Node("E")
const tree = new Tree(root);
tree.addNode([bNode,cNode],root)
tree.addNode([dNode,eNode],bNode)
console.log(tree);