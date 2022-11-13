
function CursorEffect(){
 
    this.cursor = document.querySelector('#cursor');
    this.cursorOval = this.cursor.querySelector('.oval');
    
    this.cursorQuickSetter = gsap.quickSetter(this.cursor, "css");
    this.cursorOvalQuickSetter = gsap.quickSetter(this.cursorOval, "css");
    
    this.renderStyle = {
        current: {x:1, y: 1},
        last: {x: 1, y: 1},
        ease: .1
    };
    
   this.__map = (x, a, b, c, d) =>{
     return ((x - a) * (d - c) / (b - a) + c).toFixed(3);
   };
  this.__lerp = (a, b, n)=> {
     return ((1 - n) * a + n * b).toFixed(3);
   };
   
   this.render = ()=>{
    
      this.renderStyle.current.x = this.__lerp(this.renderStyle.current.x, this.renderStyle.last.x, this.renderStyle.ease);
      this.renderStyle.current.y = this.__lerp(this.renderStyle.current.y, this.renderStyle.last.y, this.renderStyle.ease);
   
     
              let disMoveX = (Math.abs(this.renderStyle.last.x) - Math.abs(this.renderStyle.current.x));
              let disMoveY = (Math.abs(this.renderStyle.last.y) - Math.abs(this.renderStyle.current.y));
  
              let disMove = Math.abs(Math.max(Math.abs(disMoveX), Math.abs(disMoveY)));
  
              let scaleX = this.__map(disMove, 0, 80, 1, 1.2);
              let scaleY = this.__map(disMove, 0, 80, 1, .85);
     
     
    
     this.cursorQuickSetter({
          x: this.renderStyle.current.x,
          y: this.renderStyle.current.y,
       
     });
  
     let rotation = (Math.atan(disMoveY / disMoveX) * 180 / Math.PI);
     if(rotation){
            this.cursorOvalQuickSetter({
             rotation: rotation,
             scaleY: scaleY,
             scaleX: scaleX,
         });
     }
  
     
      requestAnimationFrame(this.render);
      
   };
    
   this.init = ()=>{
    
     this.render();
     let _this = this;
     console.log("ok");
     window.addEventListener('mousemove', function(event){
             _this.renderStyle.last.x = event.clientX - 20;
             _this.renderStyle.last.y = event.clientY - 20;
             
      });
  
   };
    this.init();
  }
  
  new CursorEffect();
  
  