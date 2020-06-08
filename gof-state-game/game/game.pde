
final int SCREEN_WIDTH = 640;
final int SCREEN_HEIGHT = 640;
SceneManager sceneManager = new SceneManager();

void settings() {
  size(SCREEN_WIDTH, SCREEN_HEIGHT);
  sceneManager.setState(new TitleScene());
}
  
void draw() {  // draw() loops forever, until stopped
  background(255);
  sceneManager.draw();
}
