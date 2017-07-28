import React from 'react';
import _ from 'lodash';
import {Grid, Row, Col, PageHeader, Button, ButtonGroup, InputGroup} from 'react-bootstrap';    // TODO: input
import FixedDataTable from 'fixed-data-table';

const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;

export default class HarViewer extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        <PageHeader>Har Viewer</PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table>

                        </Table>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

