class Form {
  constructor() {
     this.a1=0;
     this.a2=0;
     this.a3=0;
    
    this.input = createInput('Daksh');
    this.button = createButton('Play');
    this.radio=createRadio();
    this.button1=createButton("yes");
    this.button2=createButton("no");
    this.button3=createButton("yes");
    this.button4=createButton("no");
    this.button5=createButton("yes");
    this.button6=createButton("no");
    this.button1.position(50,130);
    this.button2.position(100,130);
    this.button3.position(50,200);
    this.button4.position(100,200);
    this.button5.position(50,270);
    this.button6.position(100,270);
  
    //this.button1.position(50,130);
    //this.radio.option('yes',1);
    //this.radio.option('no',2);
  //  this.radio.position(50,130);
  
    //this.radio1=createButton("yes");
    //this.radio1.option('yes',1);
    //this.radio1.option('no',2);
 //this.radio1.position(50,200);
    //this.radio2=createRadio();
    
    //this.radio2.option('yes',1);
   //this.radio2.option('no',2);
    this.radio3=createButton("go");
    this.greeting3 = createElement('h1');
    this.greeting = createElement('h3');
    this.greeting1= createElement('h3');
    this.greeting2= createElement('h3'); 
    
  }
  hide(){
   // this.input.hide();
   // this.greeting.hide();
   // this.button.hide();
  //  this.radio.hide();
   // this.radio1.hide();
   // this.radio2.hide();
   // this.radio3.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("Survey Form");
    title.position(130, 0);
    
  //  this.radio.hide();
   // this.radio1.hide();
   // this.radio2.hide();
   
   this.button1.hide();
   this.button2.hide();
   this.button3.hide();
   this.button4.hide();
   this.button5.hide();
   this.button6.hide();

    this.radio3.hide();
   this.input.position(130, 160);
    this.button.position(250, 200);
 this.button1.mousePressed(()=>{
this.a1=1;
 })
 
 this.button2.mousePressed(()=>{
  this.a1=2;
   })
   
 this.button3.mousePressed(()=>{
  this.a2=1;
   })
   
 this.button4.mousePressed(()=>{
  this.a2=2;
   })
   
 this.button5.mousePressed(()=>{
  this.a3=1;
   })
   
 this.button6.mousePressed(()=>{
  this.a3=2;
   })
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
     // this.radio3.hide();
     
    //this.radio.show();
     //this.radio.show();
      this.button1.show();
      this.button2.show();
      this.button3.show();
      this.button4.show();
      this.button5.show();
      this.button6.show();

    //this.radio1.show();
    //this.radio2.show();
    this.radio3.show();
   
      var name = this.input.value();
      
      player.update(name);
      
      this.greeting.html("Q1. Do you need free lunch meals in school?");
      this.greeting.position(40, 90)

  
    // this.radio.position(50,130);
     //this.a1=this.radio.selected();
     


     this.greeting1.html("Q2. Would you like to donate money to school?");
      this.greeting1.position(40, 140)
    
    
     //this.a2=this.radio1.selected();
     
     this.greeting2.html("Q3-How much per month would you be willing to pay?");
     this.greeting2.position(20, 230)
   
   
  //  this.radio2.position(50,270);
  //  this.a3=this.radio2.selected();
    console.log(this.a1,this.a2,this.a3);
    //console.log(this.radio2.selected());
this.radio3.position(370,390);


    });
    this.radio3.mousePressed(()=>{
      console.log(this.a1,this.a2,this.a3);
      
      player.update(this.a1,1);
      player.update(this.a2,2);
      player.update(this.a3,3);
     
    })
  }
}
