import 'jquery/dist/jquery';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import 'jsgrid/dist/jsgrid';
import 'jsgrid/dist/jsgrid-theme.css';
import 'jsgrid/dist/jsgrid.css';

import {players} from './players';
<<<<<<< HEAD
<<<<<<< HEAD

const loadGrid = () => {
  $('#jsGrid').jsGrid({
    height: '600px',
=======
=======
>>>>>>>   #3 Display all provided data
import numeral from 'numeral';

const sortNum = (a, b) => {
  return numeral(a).value() - numeral(b).value();
};

const loadGrid = () => {
  $('#jsGrid').jsGrid({
    height: '500px',
<<<<<<< HEAD
=======
=======

const loadGrid = () => {
  $('#jsGrid').jsGrid({
    height: '600px',
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    width: '100%',

    filtering: true,
    editing: true,
    sorting: true,
    paging: true,
    autoload: true,
    filtering: true,
<<<<<<< HEAD
<<<<<<< HEAD
    pageSize: 25,
=======
    pageSize: 15,
=======
    pageSize: 15,
=======
    pageSize: 25,
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    pageButtonCount: 5,

    deleteConfirm: 'Do you really want to delete the player?',

    controller: {
      loadData: function(filter) {
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(filter);
=======
=======
=======
        console.log(filter);
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
        return players;
      },
    },

    // Player(Player 's name)
    fields: [{
      name: 'Player',
      type: 'text',
      width: 150,
      align: 'left',
    },
    // Team(Player 's team abreviation)
    {
      name: 'Team',
      type: 'text',
      width: 50,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      filtering: false,
      sorting: false,
=======
      filtering: false,
      sorting: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // Pos(Player 's postion)
    {
      name: 'Pos',
      type: 'text',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
    },
    // Att / G(Rushing Attempts Per Game Average)
    {
      name: 'Att/G"',
      type: 'number',
      width: 30,
=======
=======
>>>>>>>   #3 Display all provided data
      filtering: false,
      sorting: false,
    },
    // Att / G(Rushing Attempts Per Game Average)
    {
      name: 'Att/G',
      type: 'number',
      width: 50,
      filtering: false,
      sorting: false,
<<<<<<< HEAD
=======
=======
    },
    // Att / G(Rushing Attempts Per Game Average)
    {
      name: 'Att/G"',
      type: 'number',
      width: 30,
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // Att(Rushing Attempts)
    {
      name: 'Att',
      type: 'number',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      filtering: false,
      sorting: false,
=======
      filtering: false,
      sorting: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // Yrds(Total Rushing Yards)
    {
      name: 'Yds',
      type: 'number',
      width: 50,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      sorter: sortNum,
      filtering: false,
=======
      sorter: sortNum,
      filtering: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // Avg(Rushing Average Yards Per Attempt)
    {
      name: 'Avg',
      type: 'number',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      filtering: false,
      sorting: false,
=======
      filtering: false,
      sorting: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // Yds / G(Rushing Yards Per Game)
    {
      name: 'Yds/G',
      type: 'number',
<<<<<<< HEAD
<<<<<<< HEAD
      width: 30,
=======
      width: 50,
      filtering: false,
      sorting: false,
=======
      width: 50,
      filtering: false,
      sorting: false,
=======
      width: 30,
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // TD(Total Rushing Touchdowns)
    {
      name: 'TD',
      type: 'number',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      sorter: sortNum,
      filtering: false,
=======
      sorter: sortNum,
      filtering: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // Lng(Longest Rush--a T represents a touchdown occurred)
    {
      name: 'Lng',
      type: 'number',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      sorter: sortNum,
      filtering: false,
=======
      sorter: sortNum,
      filtering: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // 1 st(Rushing First Downs)
    {
      name: '1st',
      type: 'number',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      filtering: false,
      sorting: false,
=======
      filtering: false,
      sorting: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // 1 st % (Rushing First Down Percentage)
    {
      name: '1st%',
      type: 'number',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      filtering: false,
      sorting: false,
=======
      filtering: false,
      sorting: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // 20 + (Rushing 20 + Yards Each)
    {
      name: '20+',
      type: 'number',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      filtering: false,
      sorting: false,
=======
      filtering: false,
      sorting: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // 40 + (Rushing 40 + Yards Each)
    {
      name: '40+',
      type: 'number',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      filtering: false,
      sorting: false,
=======
      filtering: false,
      sorting: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    // FUM(Rushing Fumbles).
    {
      name: 'FUM',
      type: 'number',
      width: 30,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      filtering: false,
      sorting: false,
=======
      filtering: false,
      sorting: false,
=======
>>>>>>>   #3 Display all provided data
>>>>>>>   #3 Display all provided data
    },
    {
      type: 'control',
    },
    ],
  });
};

$(document).ready(() => {
  loadGrid();
});
