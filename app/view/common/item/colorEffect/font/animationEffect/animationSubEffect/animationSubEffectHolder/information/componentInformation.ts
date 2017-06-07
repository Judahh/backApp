importJS('app/view/common/component/component');

class ComponentInformation extends Component {
  information: string;
  language: string;
  item: ComponentItem;
  

  constructor(father?: Component) {
    super(father, "a");
    this.getItem();
    // this.item=new ComponentItem(this.element);
  }

  private getItem(){
    this.item = <ComponentItem>this.seekFatherComponent("ComponentItem");
  }

  public renderAfterUpdateJSON() {
    if (this.language == undefined) {
      this.getLanguage();
    }
    this.element.innerHTML = this.information;
  }

  protected getLanguage() {
    if(this.item!=undefined){
      if (this.item.getPage() != undefined) {
        console.log("PAGE:" + this.item.getPage());
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
          this.element.innerHTML = subJSON[languageProperty];
        }
      }
    }
  }
}