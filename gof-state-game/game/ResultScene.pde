class ResultScene extends IState {
  public void initialize(){
    print("TitleScene.initialize. Please type T\n");
  }
  public void terminate(){
    print("ResultScene.terminalte\n");
  }
  void draw(SceneManager sm){
    background(0, 102, 153);
    fill(255, 255, 255);
    textSize(100);
    text("GAME OVER", 0, SCREEN_HEIGHT/2);
    if(keyPressed){
      if(keyCode == 'T'){
        sm.setState(new TitleScene());
      }
    }    
  }
}
