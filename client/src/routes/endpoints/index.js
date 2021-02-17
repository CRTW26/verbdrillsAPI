import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Endpoints = () => (

    <div class={style.profile}>
        <h1>Endpoints</h1>
        <p>The following table displays the endpoints currently supported by the verbdrills API:</p>
        <table>
            <tbody>
                <tr>
                    <th>Endpoint</th>
                    <th>Description</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td>verbgroups</td>
                    <td>This endpoint allows you to access list of groups of verbs according to type and tense. It requires both type and tense to be specified in the query </td>
                    <td>/verbgroups/?key=abcdef&type=regular&tense=present</td>
                </tr>
                <tr>
                    <td>reference</td>
                    <td>This endpoint accept an infintive as a parametre and will return all conjugations of the verb from the database.</td>
                    <td>/reference/?key=abcdef&verb=hablar</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Endpoints;
