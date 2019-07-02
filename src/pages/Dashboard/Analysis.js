import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
  Button,
  Select,
  message,
} from 'antd';
import room from '@/assets/room.svg';
import ReactSVG from 'react-svg';
import svg from '@/assets/test.svg';
import Trend from '@/components/Trend';
import NumberInfo from '@/components/NumberInfo';
import numeral from 'numeral';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Yuan from '@/utils/Yuan';
import { getTimeDistance } from '@/utils/utils';
import MultiCrops from 'react-multi-crops';
import styles from './Analysis.less';
import Hello from '@/components/Test/Hello';

const { Option } = Select;

let str2 = `
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="497 -124 1605 1041" style="enable-background:new 497 -124 1605 1041;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}
	.st1{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
	.st2{font-family:'MicrosoftYaHei';}
	.st3{font-size:18px;}
	.st4{enable-background:new    ;}
</style>
<polygon id="XMLID_43_" class="st0" points="758.3,873 1089.3,873 1101.3,858.7 1101.3,280 1932.3,280 1951.3,270.5 1951.3,261 
	1945.3,261 1945.3,171 1931.3,171 1931.3,163 1944.3,154.5 1944.3,102 1948.3,98.3 1948.3,88 1927.3,88 1927.3,64 1941.3,52.5 
	1941.3,-36 1946.3,-41.2 1946.3,-52 881.3,-52 866.3,-71 721.3,-71 721.3,-53 716.3,-53 716.3,173 781.3,173 781.3,196 758.3,196 
	"/>
<g>
	<rect id="XMLID_60_" x="1131.7" y="-48" class="st1" width="119" height="86"/>
	<text id="XMLID_17_" transform="matrix(1 0 0 1 1158.8925 0.4178)" class="st2 st3">讯问室3</text>
</g>
<g>
	<rect id="XMLID_61_" x="1265.3" y="-48" class="st1" width="119" height="86"/>
	<text id="XMLID_18_" transform="matrix(1 0 0 1 1290.8418 5.0854)" class="st2 st3">讯问室2</text>
</g>
<g>
	<rect id="XMLID_62_" x="1400.3" y="-48" class="st1" width="123" height="86"/>
	<text id="XMLID_19_" transform="matrix(1 0 0 1 1432.8418 5.0854)" class="st2 st3">讯问室1</text>
</g>
<g>
	<polygon id="XMLID_63_" class="st1" points="1535.3,-48 1863.3,-48 1863.3,-25 1928.3,-25 1928.7,57.9 1922.3,62.8 1922.3,91 
		1922.3,99 1931.3,99 1931.3,123 1809.3,123 1809.3,88 1658.3,88 1655.1,91 1535.3,91 	"/>
	<text id="XMLID_20_" transform="matrix(1 0 0 1 1693.5085 29.6186)" class="st2 st3">法制工作区</text>
</g>
<g>
	<polygon id="XMLID_65_" class="st1" points="1626.3,125 1676.3,125 1676.3,137 1801.3,137 1801.3,98 1792.3,98 1792.3,94 
		1675.3,94 1675.3,99 1626.3,99 	"/>
	<text id="XMLID_21_" transform="matrix(1 0 0 1 1701.8418 120.6186)" class="st2 st3">留置室</text>
</g>
<g>
	<rect id="XMLID_66_" x="1622.3" y="141" class="st1" width="179" height="59"/>
	<text id="XMLID_22_" transform="matrix(1 0 0 1 1683.5085 177.2852)" class="st2 st3">候问室1</text>
</g>
<g>
	<rect id="XMLID_64_" x="1622.3" y="206" class="st1" width="179" height="59"/>
	<text id="XMLID_23_" transform="matrix(1 0 0 1 1677.8418 241.9518)" class="st2 st3">候问室2</text>
</g>
<g>
	<rect id="XMLID_67_" x="1400.3" y="130" class="st1" width="128" height="135"/>
	<text id="XMLID_25_" transform="matrix(1 0 0 1 1421.8418 210.3453)" class="st2 st3">信息采集室</text>
</g>
<g>
	<rect id="XMLID_69_" x="1265.3" y="94" class="st1" width="121" height="171"/>
	<text id="XMLID_26_" transform="matrix(1 0 0 1 1280.8418 188.3453)" class="st2 st3">人身检查室</text>
</g>
<g>
	<rect id="XMLID_70_" x="1132.3" y="95" class="st1" width="121" height="171"/>
	<text transform="matrix(1 0 0 1 1165.8418 175.6815)" class="st4"><tspan x="0" y="0" class="st2 st3">接待室</tspan><tspan x="0" y="21.6" class="st2 st3">等候区</tspan></text>
</g>
<g>
	<polygon id="XMLID_58_" class="st1" points="1807.3,129 1933.3,129 1933.3,156 1926.3,161.3 1926.3,175 1940.3,175 1940.3,265 
		1815.3,265 1815.3,260 1807.3,260 	"/>
	<text id="XMLID_24_" transform="matrix(1 0 0 1 1842.8418 205.9992)" class="st2 st3">保安室</text>
</g>
<g>
	<polygon id="XMLID_55_" class="st1" points="860.3,156 1001.3,156 1001.3,98 964.3,98 964.3,93 867.3,93 867.3,99 860.3,99 	"/>
	<text transform="matrix(1 0 0 1 899.8416 120.7542)" class="st4"><tspan x="0" y="0" class="st2 st3">卫生间</tspan><tspan x="0" y="21.6" class="st2 st3">尿检室</tspan></text>
</g>
<g>
	<polygon id="XMLID_46_" class="st1" points="792.3,197 1001.3,197 1001.3,163 859.3,163 859.3,172 792.3,172 	"/>
	<text id="XMLID_3_" transform="matrix(1 0 0 1 891.0085 186.4992)" class="st2 st3">机房</text>
</g>
<g>
	<rect id="XMLID_54_" x="761.3" y="206" class="st1" width="234" height="63"/>
	<text id="XMLID_4_" transform="matrix(1 0 0 1 830.2325 242.7492)" class="st2 st3">重案讯问室</text>
</g>
<g>
	<rect id="XMLID_53_" x="761.3" y="275" class="st1" width="116.5" height="69"/>
	<text id="XMLID_5_" transform="matrix(1 0 0 1 790.3416 313.9992)" class="st2 st3">讯问室6</text>
</g>
<g>
	<rect id="XMLID_52_" x="761.3" y="350" class="st1" width="234" height="69"/>
	<text id="XMLID_9_" transform="matrix(1 0 0 1 843.3812 392.3325)" class="st2 st3">讯问室7</text>
</g>
<g>
	<rect id="XMLID_51_" x="761.3" y="425" class="st1" width="234" height="69"/>
	<text id="XMLID_10_" transform="matrix(1 0 0 1 840.5644 466.3325)" class="st2 st3">讯问室8 </text>
</g>
<g>
	<rect id="XMLID_50_" x="761.3" y="500" class="st1" width="234" height="69"/>
	<text id="XMLID_11_" transform="matrix(1 0 0 1 843.2273 538.9991)" class="st2 st3">讯问室9</text>
</g>
<g>
	<rect id="XMLID_49_" x="761.3" y="575" class="st1" width="234" height="69"/>
	<text id="XMLID_12_" transform="matrix(1 0 0 1 839.7642 614.9991)" class="st2 st3">讯问室10</text>
</g>
<g>
	<rect id="XMLID_48_" x="761.3" y="650" class="st1" width="234" height="69"/>
	<text id="XMLID_13_" transform="matrix(1 0 0 1 830.2325 689.9991)" class="st2 st3">特殊讯问室</text>
</g>
<g>
	<rect id="XMLID_47_" x="761.3" y="725" class="st1" width="234" height="69"/>
	<text id="XMLID_14_" transform="matrix(1 0 0 1 844.7697 765.6656)" class="st2 st3">询问室1</text>
</g>
<g>
	<rect id="XMLID_45_" x="761.3" y="800" class="st1" width="234" height="69"/>
	<text id="XMLID_15_" transform="matrix(1 0 0 1 843.2271 845.3325)" class="st2 st3">询问室2</text>
</g>
<g>
	<rect id="XMLID_6_" x="878.8" y="275" class="st1" width="116.5" height="69"/>
	<text id="XMLID_7_" transform="matrix(1 0 0 1 908.6749 313.9988)" class="st2 st3">辨认室</text>
</g>
<g>
	<rect id="XMLID_59_" x="997.3" y="-48" class="st1" width="119" height="86"/>
	<text transform="matrix(1 0 0 1 1022.5543 0.4178)" class="st2 st3">讯问室4</text>
</g>
<g>
	<rect id="XMLID_57_" x="866.3" y="-48" class="st1" width="119" height="86"/>
	<text transform="matrix(1 0 0 1 887.7222 0.4178)" class="st2 st3">讯问室5</text>
</g>
<g>
	<rect id="XMLID_56_" x="720.3" y="-67" class="st1" width="136" height="232"/>
	<text transform="matrix(1 0 0 1 763.3416 48.9996)" class="st2 st3">指挥室</text>
</g>
</svg>
`;

const roomArray = [
  {
    roomName: '指挥室',
    roomNum: '1',
  },
  {
    roomName: '讯问室5',
    roomNum: '2',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '讯问室4',
    roomNum: '3',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '讯问室3',
    roomNum: '4',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '讯问室2',
    roomNum: '5',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '讯问室1',
    roomNum: '6',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '法制工作区',
    roomNum: '7',
  },
  {
    roomName: '卫生间尿检室',
    roomNum: '8',
  },
  {
    roomName: '接待室等候区',
    roomNum: '9',
  },
  {
    roomName: '人身安全检查室',
    roomNum: '9',
  },
  {
    roomName: '信息采集室',
    roomNum: '10',
  },
  {
    roomName: '留置室',
    roomNum: '15',
  },
  {
    roomName: '候问室1',
    roomNum: '16',
  },
  {
    roomName: '候问室2',
    roomNum: '17',
  },
  {
    roomName: '保安室',
    roomNum: '18',
  },
  {
    roomName: '机房',
    roomNum: '19',
  },
  {
    roomName: '重案讯问室',
    roomNum: '20',
  },
  {
    roomName: '讯问室6',
    roomNum: '7',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '辩认室',
    roomNum: '8',
    roomType: '13007',
    roomTypeName: '辩认室',
  },
  {
    roomName: '讯问室7',
    roomNum: '16',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '讯问室8',
    roomNum: '9',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '讯问室9',
    roomNum: '10',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '讯问室10',
    roomNum: '11',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '特殊讯问室',
    roomNum: '12',
    roomType: '13004',
    roomTypeName: '讯问室',
  },
  {
    roomName: '询问室1',
    roomNum: '13',
    roomType: '13003',
    roomTypeName: '询问室',
  },
  {
    roomName: '询问室2',
    roomNum: '14',
    roomType: '13003',
    roomTypeName: '询问室',
  },
];

class Analysis extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    coordinates: [],
    showMap: [],
    testIcon: [],
    array: [],
    data: [],
  };

  changeCoordinate = (coordinate, index, coordinates) => {
    const array = coordinates.findIndex(item => coordinate.id === item.id);
    this.setState({
      coordinates,
    });
  };

  deleteCoordinate = (coordinate, index, coordinates) => {
    this.setState({
      coordinates,
    });
  };

  click = (value, item) => {
    item.room = value;
    const { coordinates } = this.state;
    const array = coordinates.slice();
    const index = array.findIndex(coordinate => coordinate.id === item.id);
    if (index > 0) {
      array[index] = item;
    }

    this.setState({
      coordinates: array,
    });
  };

  save = () => {
    console.log('save', this.state.coordinates);
    const { coordinates } = this.state;
    const array = coordinates.slice();
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const room = JSON.parse(array[i].room);
      const param = {
        x: array[i].x,
        y: array[i].y,
        height: array[i].height,
        width: array[i].width,
        id: array[i].id,
        roomName: room.roomName,
      };
      param.isuse = 0;
      if (room.roomName === '讯问室5') {
        // 0可用，1自己占用，2别人占用不可用
        param.isuse = 2;
      } else if (room.roomName === '讯问室1') {
        param.isuse = 1;
      }
      result.push(param);
    }
    // const result = {
    //   width: 500,
    //   scale: 1,
    //   array: this.state.coordinates,
    // }
    this.setState({
      showMap: result,
    });
  };

  test = e => {
    console.log('eeeeeeeeeeee', e.target);
    const { array } = this.state;
    if (e.target.id && e.target.nodeName !== 'text' && e.target.nodeName !== 'svg') {
      array.push(e.target.id);
      this.setState({
        array,
      });
    }
  };

  test2 = e => {
    console.log('test2', e.target);
    const { data } = this.state;
    if (e.target.nodeName === 'text') {
      console.log('roomName', e.target.innerHTML);
      const list = data.find(item => e.target.innerHTML === item.roomName);
      console.log('房间list', list);
    } else if (e.target.id) {
      const list = data.find(item => e.target.id === item.id);
      console.log('空白list', list);
    }
  };

  onchage = (value, item) => {
    console.log('value,item', value, item);
    const room = JSON.parse(value);
    const array = this.state.data.slice();
    let isuse = -1;
    const param = '';
    if (room.roomType === '13003' || room.roomType === '13004' || room.roomType === '13007') {
      isuse = 0; // 可用
      if (room.roomName === '讯问室5') {
        isuse = 2; // 占用
      } else if (room.roomName === '讯问室3') {
        isuse = 1; // 自己使用
      }
    }
    array.push({
      roomType: room.roomType,
      roomTypeName: room.roomTypeName,
      roomName: room.roomName,
      roomNum: room.roomNum,
      id: item,
      isuse,
    });
    this.setState({
      data: array,
    });
  };

  render() {
    const { coordinates, showMap, data } = this.state;
    console.log('data', data);
    const svgArryay = [
      {
        roomName: '法制工作区',
        roomId: '111',
        points: '524,42 770,40 770,180  694,180 694,151 524,151',
      },
      {
        roomName: '指挥室',
        roomId: '222',
        points: '26,27 26,211 103,211 103,26',
      },
      {
        roomName: '讯问室5',
        roomId: '333',
        points: '109, 40 109, 109 181, 109 181, 40',
      },
    ];

    // 必须无背景色
    // const { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      console.log('item', item);
      str2 = str2.replace(/class="st1"/g, '');

      if (item.isuse === 0) {
        // 可用
        str2 = str2.replace(
          `id="${item.id}"`,
          `id="${item.id}" fill="#1890ff" style="cursor:pointer"`
        );
      } else if (item.isuse === 1) {
        // 自己占用
        str2 = str2.replace(
          `id="${item.id}"`,
          `id="${item.id}" fill="#7ebc37" style="cursor:pointer"`
        );
      } else if (item.isuse === 2) {
        // 别人占用
        str2 = str2.replace(
          `id="${item.id}"`,
          `id="${item.id}" fill="rgb(190, 200, 200)" style="cursor:pointer"`
        );
      } else {
        str2 = str2.replace(
          `id="${item.id}"`,
          `id="${
            item.id
          }" fill="#fff" style="cursor:not-allowe; stroke:#000000; stroke-width:2; stroke-miterlimit:10"`
        );
      }
    }
    const { array } = this.state;
    return (
      <GridContent>
        <Hello compiler="TypeScript" framework="React" />
        <div style={{ width: '300px' }}>
          <ReactSVG src={room} onClick={this.test} renumerateIRIElements={false} />
        </div>
        {/* <Row>
          <Col span={20}>
            <div dangerouslySetInnerHTML={{ __html: str }} onClick={this.test} />
            <div dangerouslySetInnerHTML={{ __html: str2 }} onClick={this.test2} />

          </Col>
          <Col span={4}>
            {
              array.map((item, index) => (
                <Row>
                  <label>热区-{item}：</label>
                  <Select onChange={(value) => this.onchage(value, item)} style={{ minWidth: '200px' }}>
                    {
                      roomArray.map((items) => (
                        <Option value={JSON.stringify(items)}>{items.roomName}</Option>
                      ))
                    }
                  </Select>
                </Row>
              ))
            }
          </Col>
        </Row> */}
      </GridContent>
    );
  }
}

export default Analysis;
