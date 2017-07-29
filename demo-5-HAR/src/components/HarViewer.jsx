require('fixed-data-table/dist/fixed-data-table.css');

import React from 'react';
import ReactDom from 'react-dom';

import _ from 'lodash';
import {Grid, Row, Col, PageHeader, Button, ButtonGroup} from 'react-bootstrap';
import Input from '../core/Input';
import mimeTypes from '../core/mimeTypes';
import FixedDataTable from 'fixed-data-table';

const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const GutterWidth = 30; // 30 pixels

export default class HarViewer extends React.Component {

    constructor() {
        super();
        this.state = {
            isColumnResizing: false,
            columnWidths: {
                url: 500,
                size: 100,
                time: 200
            },
            tableWidth: 1000,
            tableHeight: 500
        };

        this._getEntry = this._getEntry.bind(this);
        this._onColumnResized = this._onColumnResized.bind(this);
        this._onResize = this._onResize.bind(this);
        this._sampleChanged = this._sampleChanged.bind(this);
        this._filterTextChanged=this._filterTextChanged.bind(this);
    }

    _getEntry(index) {
        return this.props.entries[index];
    }

    _onColumnResized(newColumnWidth, dataKey) {
        let columnWidths = this.state.columnWidths;
        columnWidths[dataKey] = newColumnWidth;

        this.setState({columnWidths: columnWidths, isColumnResizing: false});
    }

    //---------------------------
    //        Table Resizing
    //---------------------------
    componentDidMount() {
        window.addEventListener(
            "resize",
            _.debounce(this._onResize, 50, {leading: true, trailing: true})
        );
        this._onResize();
    }

    _onResize() {
        let parent = this.refs.entriesTable.parentNode;   //ReactDom.findDOMNode(this).parentNode;

        this.setState({
            tableWidth: parent.clientWidth - GutterWidth,
            tableHeight: document.body.clientHeight - parent.offsetTop - GutterWidth * 0.5
        });
    }

    _sampleChanged() {

    }

    //---------------------------
    //        Filtering
    //---------------------------
    _createButton(type, label) {
        let handler = this._filterRequested.bind(this, type);
        return (
            <Button key={type}
                    bsStyle="primary"
                    active={this.state.type === type}
                    onClick={handler}>
                {label}
            </Button>
        );
    }

    _filterRequested(type, event) {

    }

    _filterTextChanged(){

    }

    render() {

        //不好用
        const divProps = _.omit(this.props, "isHeaderCell", "dataKey", "columnData", "cellRenderer", "headerDataGetter");

        let buttons = _.map(_.keys(mimeTypes.types), (x) => this._createButton(x, mimeTypes.types[x].label));

        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        <PageHeader>Har Viewer</PageHeader>
                    </Col>
                    <Col sm={3} smOffset={9}>
                        <div>
                            <label className="control-label"></label>
                            <select className="form-control" onChange={this._sampleChanged}>
                                <option value="">---</option>
                            </select>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <p>Pie Chart</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={8}>
                        <ButtonGroup bsSize="small">
                            {this._createButton("all", "All")}
                            {buttons}
                        </ButtonGroup>
                    </Col>

                    <Col sm={4}>
                        <Input type="search" placeholder="Search Url" bsSize="small"
                               onChange={this._filterTextChanged}
                               ref="filterText"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <Table {...divProps}
                               ref="entriesTable"
                               rowsCount={divProps.entries.length}
                               width={this.state.tableWidth}
                               headerHeight={30}
                               height={this.state.tableHeight}
                               rowHeight={30}
                               rowGetter={this._getEntry}
                               isColumnResizing={this.state.isColumnResizing}
                               onColumnResizeEndCallback={this._onColumnResized}
                        >

                            <Column dataKey="url"
                                    width={this.state.columnWidths.url}
                                    isResizable={true}
                                    label="Url"
                                    flexGrow={null}/>
                            <Column dataKey="size"
                                    width={this.state.columnWidths.size}
                                    isResizable={true}
                                    label="Size"/>
                            <Column dataKey="time"
                                    width={this.state.columnWidths.time}
                                    minWidth={200}
                                    isResizable={true}
                                    label="Timeline"/>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        );
    }


}

HarViewer.defaultProps = {
    entries: []
};