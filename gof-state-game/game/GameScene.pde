
float vecJump = 0;
class GameScene extends IState {
  final float GROUND_Y = SCREEN_WIDTH / 3 * 2;
  final float HERO_SIZE = 128;
  float x = SCREEN_WIDTH / 2;
  float y = SCREEN_WIDTH / 3;
  public void initialize(){
    print("GameScene.initialize. JUMP:SHIFT\n");
  }
  public void terminate(){
    print("GameScene.terminalte\n");
  }
  void draw(SceneManager sm){
    background(150, 0, 153);
    fill(255, 255, 255);
    textSize(100);
    text("GAME", 0, SCREEN_HEIGHT/2);
    vecJump += 1.0f;
    y += vecJump;
    if(y > GROUND_Y){
      sm.setState(new ResultScene());
    }
    circle(x,y,100);
  }
}
void keyPressed(){
  if(keyCode == SHIFT){
    vecJump = -20;
  }
}
