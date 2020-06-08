class SceneManager {
  IState currentState = null;
  public void draw(){
    if(this.currentState != null){
      this.currentState.draw(this);
    }
  }
  public void setState(IState state){
    if(this.currentState != null){
      this.currentState.terminate();
    }
    this.currentState = state;
    if(this.currentState != null){
      this.currentState.initialize();
    }
  }
}
