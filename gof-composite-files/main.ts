import * as fs from "fs";
const { execSync } = require("child_process");

// タイプ(ディレクトリ or ファイル)
enum Type {
  File,
  Directory,
}
// 抽象クラス
abstract class Node {
  constructor(parent: Directory | null, name: string) {
    this.name = name;
    this.parent = parent;
    this.parent?.addChild(this);
  }
  // 自分の名前
  name: string = "";
  // 親
  parent: Directory | null = null;
  setParent(parent): void {
    this.parent = parent;
  }
  // パスを取得する
  path(): string {
    let p = this.parent;
    let ret = this.name;
    while (p != null) {
      ret = p.name + "/" + ret;
      p = p.parent;
    }
    return ret;
  }
  // 階層を数える
  countHierarchy(): number {
    let p = this.parent;
    let ret = 0;
    while (p != null) {
      ret++;
      p = p.parent;
    }
    return ret;
  }
  // 出力メソッド
  abstract print(): void;
  // タイプを取得するメソッド
  abstract getType(): Type;
}
// ファイルクラス
class File extends Node {
  print(): void {
    console.log(" ".repeat(this.countHierarchy()) + "└" + this.name);
  }
  getType(): Type {
    return Type.File;
  }
}
// ディレクトリクラス
class Directory extends Node {
  children: Array<Node> = new Array<Node>();
  print(): void {
    console.log(" ".repeat(this.countHierarchy()) + "└" + this.name);
    this.children.forEach((c) => {
      c.print();
    });
  }
  getType(): Type {
    return Type.Directory;
  }
  addChild(child): void {
    this.parent?.children.push(child);
    child.setParent(this);
  }
}

function listFiles(parent: Directory) {
  const files = fs.readdirSync(parent.path());
  files.forEach((file) => {
    const filename = `${parent.path()}/${file}`;
    const stat = fs.statSync(filename);
    if (stat.isDirectory()) {
      const dir = new Directory(parent, file);
      listFiles(dir);
    } else {
      const newFile = new File(parent, file);
    }
  });
}

// メイン関数
function main() {
  const root = new Directory(null, process.argv[2]);
  listFiles(root);
  root.print();
}

main();
