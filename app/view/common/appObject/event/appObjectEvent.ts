import { AppObject } from './../appObject';

export class AppObjectEvent extends AppObject {
  name: string;
  link: string;
  code: string;
  runFunction: string;
  appObject: AppObject;
  eventListener: boolean;

  constructor(father?: any /*AppObject*/) {
    super(father);
    this.className = 'AppObjectEvent';
    console.log('FATHER:', this.father, this);
    this.eventListener = false;
  }

  public renderAfterUpdateJSON() {
    if (this.name !== undefined) {
      if (this.name === 'build') {
        this.onEvent(this);
        this.running = true;
      } else if (this.name === 'router') {
        this.getFather().addEventListener(this, 'click');
      } else if (this.name === 'authorization') {
        if (!this.onEvent(this)) {
          this.destroyFather();
        }
      } else if (!this.eventListener) {
        this.getFather().addEventListener(this);
      }
    }
  }

  public destroyFather() {
    console.log('FATHER DESTROY:', this.father, this);
    if (this.father !== undefined) {
      this.father.destroyElement();
      delete this.father;
    }
  }

  public checkLink(runFunction) {
    if (runFunction(this.link)) {
      return this.link;
    }
    return null
  }
}
AppObjectEvent.addConstructor('AppObjectEvent', AppObjectEvent);
