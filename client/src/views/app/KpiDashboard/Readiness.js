
import React, { useState, useEffect } from 'react';
import {
    Row,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Collapse,
    ButtonDropdown,
    CustomInput,
    Card,
    CardBody,
} from 'reactstrap';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

import {
    getTodoList,
    getTodoListWithOrder,
    getTodoListSearch,
    selectedTodoItemsChange,
} from '../../../redux/actions';
import TodoListItem from '../../../components/applications/TodoListItem';
import AddNewTodoModal from '../../../containers/applications/AddNewTodoModal';
import TodoApplicationMenu from '../../../containers/applications/TodoApplicationMenu';
import ThreeLineGroupChart from '../../../containers/KpiDashboard/BusenessDevelopment/ThreeLineGroup';
import ReadinessTable from '../ActivityDashboard/ReadinessTable';

const getIndex = (value, arr, prop) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i][prop] === value) {
            return i;
        }
    }
    return -1;
};

const Readiness = ({
    match,
    intl,
    todoItems,
    searchKeyword,
    loading,
    orderColumn,
    orderColumns,
    selectedItems,
    getTodoListAction,
    getTodoListWithOrderAction,
    getTodoListSearchAction,
    selectedTodoItemsChangeAction,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [dropdownSplitOpen, setDropdownSplitOpen] = useState(false);
    const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);
    const [lastChecked, setLastChecked] = useState(null);

    useEffect(() => {
        document.body.classList.add('right-menu');
        getTodoListAction();

        return () => {
            document.body.classList.remove('right-menu');
        };
    }, [getTodoListAction]);

    const handleCheckChange = (event, id) => {
        if (lastChecked == null) {
            setLastChecked(id);
        }

        let selectedList = Object.assign([], selectedItems);
        if (selectedList.includes(id)) {
            selectedList = selectedList.filter((x) => x !== id);
        } else {
            selectedList.push(id);
        }
        selectedTodoItemsChangeAction(selectedList);

        if (event.shiftKey) {
            let items = todoItems;
            const start = getIndex(id, items, 'id');
            const end = getIndex(lastChecked, items, 'id');
            items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
            selectedList.push(
                ...items.map((item) => {
                    return item.id;
                })
            );
            selectedList = Array.from(new Set(selectedList));
            selectedTodoItemsChangeAction(selectedList);
        }
    };

    const handleChangeSelectAll = () => {
        if (loading) {
            if (selectedItems.length >= todoItems.length) {
                selectedTodoItemsChangeAction([]);
            } else {
                selectedTodoItemsChangeAction(todoItems.map((x) => x.id));
            }
        }
    };

    const { messages } = intl;

    return (
        <>
            <Row className="app-row survey-app">
                <Colxx xxs="12">
                    <div className="mb-2">
                        <h1>
                            <IntlMessages id="Readiness" />
                        </h1>
                        {loading && (
                            <div className="text-zero top-right-button-container">
                                <Button
                                    style={{ visibility: 'hidden' }}
                                    id="openmodal12"
                                    color="primary"
                                    size="lg"
                                    className="top-right-button"
                                    onClick={() => setModalOpen(true)}
                                >
                                    <IntlMessages id="Add New" />
                                </Button>{' '}
                            </div>
                        )}
                    </div>
                    <div className="mb-2">
                        <Collapse
                            id="displayOptions"
                            className="d-md-block"
                            isOpen={displayOptionsIsOpen}
                        >
                            <div className="d-block mb-2 d-md-inline-block">
                                <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                                    <DropdownToggle caret color="outline-dark" size="xs">
                                        <IntlMessages id=" By Sector " />
                                        {orderColumn ? orderColumn.label : ''}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {orderColumns.map((o, index) => {
                                            return (
                                                <DropdownItem
                                                    key={index}
                                                    onClick={() => getTodoListWithOrderAction(o.column)}
                                                >
                                                    {o.label}
                                                </DropdownItem>
                                            );
                                        })}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                                    <input
                                        type="text"
                                        name="keyword"
                                        id="search"
                                        placeholder={messages['menu.search']}
                                        defaultValue={searchKeyword}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                getTodoListSearchAction(e.target.value);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <Separator className="mb-5" />
                    <ReadinessTable />
                </Colxx>
            </Row>
            {loading && <TodoApplicationMenu />}
            <AddNewTodoModal
                toggleModal={() => setModalOpen(!modalOpen)}
                modalOpen={modalOpen}
            />
        </>
    );
};

const mapStateToProps = ({ todoApp }) => {
    const {
        todoItems,
        searchKeyword,
        loading,
        orderColumn,
        orderColumns,
        selectedItems,
    } = todoApp;
    return {
        todoItems,
        searchKeyword,
        loading,
        orderColumn,
        orderColumns,
        selectedItems,
    };
};
export default injectIntl(
    connect(mapStateToProps, {
        getTodoListAction: getTodoList,
        getTodoListWithOrderAction: getTodoListWithOrder,
        getTodoListSearchAction: getTodoListSearch,
        selectedTodoItemsChangeAction: selectedTodoItemsChange,
    })(Readiness)
);
