importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/image/componentImage');
importJS('app/view/common/dataInput/componentDataInput');
importJS('app/view/common/form/componentForm');
importJS('app/view/common/chart/componentChart');
importJS('app/view/common/map/componentMap');
importJS('app/view/common/progressBar/componentProgressBar');
importJS('app/view/common/videoHolder/componentVideoHolder');
importJS('app/view/common/sVG/componentSVG');
importJS('app/view/common/appObject/appObjectFactory/appObjectFactory');

class ComponentDivisor extends Component {
    arrayItem: Array<ComponentItem>;
    arrayImage: Array<ComponentImage>;
    arrayVideoHolder: Array<ComponentVideoHolder>;
    // videoLink: ModelVideoLink;
    arrayDataInput: Array<ComponentDataInput>;
    
    arrayChart: Array<ComponentChart>;
    arrayMap: Array<ComponentMap>;
    arrayProgressBar: Array<ComponentProgressBar>;
    arraySVG: Array<ComponentSVG>;
    arrayDivisor: Array<ComponentDivisor>;

    constructor(father?: Component) {
        super(father);
        this.arrayItem = new Array<ComponentItem>();
        this.arrayItem.type = ComponentItem;
        this.arrayDataInput = new Array<ComponentDataInput>();
        this.arrayDataInput.type = ComponentDataInput;
        this.arrayImage = new Array<ComponentImage>();
        this.arrayImage.type = ComponentImage;
        this.arrayVideoHolder = new Array<ComponentVideoHolder>();
        this.arrayVideoHolder.type = ComponentVideoHolder;
        
        this.arrayChart = new Array<ComponentChart>();
        this.arrayChart.type = ComponentChart;
        this.arrayMap = new Array<ComponentMap>();
        this.arrayMap.type = ComponentMap;
        this.arrayProgressBar = new Array<ComponentProgressBar>();
        this.arrayProgressBar.type = ComponentProgressBar;
        this.arraySVG = new Array<ComponentSVG>();
        this.arraySVG.type = ComponentSVG;
        this.arrayDivisor = new Array<ComponentDivisor>();
        this.arrayDivisor.type = ComponentDivisor;
    }
}