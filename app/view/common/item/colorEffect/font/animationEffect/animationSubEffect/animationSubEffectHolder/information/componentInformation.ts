importJS('app/view/common/component/component');
importJS('app/view/common/appObject/appObjectFactory/appObjectFactory');

class ComponentInformation extends Component {
  code: string;
  appObject: AppObject;
  information: string;
  language: string;
  item: ComponentItem;


  constructor(father?: Component) {
    super(father, "a");
    this.getItem();
    // this.item=new ComponentItem(this.element);
  }

  private getItem() {
    this.item = <ComponentItem>this.seekFatherComponent("ComponentItem");
  }

  public renderAfterUpdateJSON() {
    if (this.language == undefined) {
      this.getLanguage();
    }
    if (this.code != undefined) {
      // var age = new this.className();//window[this.className]();

      var appObject = AppObjectFactory.create(this.code, this);
      for (var property in this.appObject) {
        if (this.appObject.hasOwnProperty(property)) {
          appObject[property] = this.appObject[property];
        }
      }
      this.appObject = appObject;
      // console.log("CODE:" + this.code);
      // console.log("appClass:" + this.appObject.result());
      this.appObject.result(this.element);
    }
    if (!this.element.innerHTML) {
      this.element.innerHTML = this.information;
    }

  }

  protected getLanguage() {
    if (this.item != undefined) {
      if (this.item.getPage() != undefined) {
        // console.log("PAGE:" + this.item.getPage());
        this.getJSONLanguagePromise(this.item.getPage() + "L");
      }
    }
  }

  protected updateLanguage(jSON) {
    var property;
    for (property in jSON) {
      if (property != undefined) {
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }

        if (jSON[property]["language"] == Util.getCurrentLanguage()) {
          // console.log("LANG:"+jSON[property]["language"]);
          break;
        }
      }
    }
    // console.log("selected lan:"+property);
    var subJSON = jSON[property];
    for (var languageProperty in subJSON) {
      if (languageProperty != undefined) {
        if (!subJSON.hasOwnProperty(languageProperty)) {
          continue;
        }

        if (languageProperty == this.information) {
          if (subJSON[languageProperty].constructor === Array) {
            this.element.innerHTML = "";
            subJSON[languageProperty].forEach(element => {
              this.element.innerHTML += element + "<br/>";
            });
          } else {
            this.element.innerHTML = subJSON[languageProperty];
          }
          // console.log("INNER:"+subJSON[languageProperty]);
        }
      }
    }
  }
}