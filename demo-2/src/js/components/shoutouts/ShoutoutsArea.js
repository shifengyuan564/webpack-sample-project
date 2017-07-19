import React from 'react';

import Shoutout from '../shoutout/Shoutout';
import * as ShoutoutActions from '../../actions/ShoutoutActions';
import ShoutoutsStore from '../../stores/ShoutoutsStore';

export default class ShoutoutsArea extends React.Component {

    constructor() {
        super();
        this.state = {
            newShoutout: '',
            newName: '',
            shoutoutsList: ShoutoutsStore.getShoutouts()
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getShoutoutList = this.getShoutoutList.bind(this);
        this.createShoutout = this.createShoutout.bind(this);
    }

    /*
     componentWillMount     在页面被渲染(render方法)之前执行，一般在componentWillMount中触发请求数据的方法
     componentDidMount      类似js中的window.onload，执行在render方法之后，也就是页面的组件渲染完毕之后
     componentWillUnmount   组件要被从界面上移除的时候，就会调用
     */
    componentWillMount() {
        ShoutoutsStore.on("newSoEvent", this.getShoutoutList);
    }

    componentWillUnmount() {
        ShoutoutsStore.removeListener("newSoEvent", this.getShoutoutList);
    }

    /*setState() with a dynamic key name*/
    handleInputChange(e) {
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    getShoutoutList() {
        this.setState({shoutoutsList: ShoutoutsStore.getShoutouts()});
    }

    // view -> action -> dispatcher -> store -> view
    createShoutout(e) {
        e.preventDefault();  //阻止默认行为（表单提交时，页面刷新）
        ShoutoutActions.createAction(this.state.newShoutout, this.state.newName);
    }

    render() {
        const soList = this.state.shoutoutsList;
        const soDomList = soList.map((so) => <Shoutout key={so.id} {...so}/>);

        return (
            <div>
                <h2>Shoutouts List</h2>
                <form onSubmit={this.createShoutout} action="">
                    <label> Shoutout:
                        <input name="newShoutout" type="text"
                               value={this.state.newShoutout}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label> Author:
                        <input name="newName" type="text"
                               value={this.state.newName}
                               onChange={this.handleInputChange}/>
                    </label>
                    <input type="submit" value="Shout It!"/>
                </form>

                <ul>{soDomList}</ul>
            </div>
        );
    }
}