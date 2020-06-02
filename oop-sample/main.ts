// インターフェース(仕様を決める設計図)
// インターフェースにはプロパティを持つことはできない。(メソッドの定義だけ)
interface IPerson {
  getFullName(): string
}

// インターフェースIPersonを実装
// プロパティに名字・名前を持つ
class Person implements IPerson {
  protected firstName: string;  // プロパティは分かりやすい命名規則があったりなかったり。
  protected familyName: string;
  //インスタンス化するとcounstructor()が実行される
  constructor(familyName: string, firstName: string) {
    this.familyName = familyName;
    this.firstName = firstName;
  }
  getFullName(): string {
    return `${this.familyName} ${this.firstName} さん`
  }
}

// Personを継承
// getFullNameをオーバーライド
class Girl extends Person {
  getFullName(): string {
    return `${this.familyName} ${this.firstName} ちゃん`
  }
}
// Personを継承
// getFullNameをオーバーライド
class Boy extends Person {
  getFullName(): string {
    return `${this.familyName} ${this.firstName} くん`
  }
}

// new クラス名() でインスタンス化できる
const people: Array<IPerson> = []
people.push(new Girl('伊藤', '凛'))
people.push(new Person('佐藤', '蓮'))
people.push(new Person('鈴木', '樹'))
people.push(new Boy('高橋', '律'))
people.push(new Girl('田中', '結菜'))
people.push(new Person('渡辺', '芽依'))
people.push(new Person('山本', '大翔'))
people.push(new Girl('中村', '莉子'))
people.push(new Boy('小林', '大翔'))
people.push(new Person('加藤', '楓'))

// 共通のインターフェースを持っているので、ループで回せる
for (let i = 0; i < people.length; i++) {
  console.log(people[i].getFullName())
}
