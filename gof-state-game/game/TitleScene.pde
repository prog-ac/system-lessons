class TitleScene extends IState {
  public void initialize(){
    print("TitleScene.initialize. Please type G\n");
  }
  public void terminate(){
    print("TitleScene.terminate\n");
  }
  void draw(SceneManager sm){
    background(255, 204, 0);
    fill(255, 255, 255);
    textSize(100);
    text("TITLE", 0, SCREEN_HEIGHT/2);
    if(keyPressed){
      if(keyCode == 'G'){
        sm.setState(new GameScene());
      }
    }    
  }
}
