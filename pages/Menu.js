import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid" id='reUse'>
                    <a class="navbar-brand fw-bold" href="#">Moodle Tasks</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Hello World</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/congrats">Congrats Card</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/league">SuperOverLeague</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/social">Social Button</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/notify">notification</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Member Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/tech">Technology Card</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hooks</a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/hooks">AddSub</Link></li>
                                    <li><Link class="dropdown-item" to="/fruit">Fruits</Link></li>
                                    <li><Link class="dropdown-item" to="/feed">Feedback</Link></li>
                                    <li><Link class="dropdown-item" to="/datefinder">CourseDate</Link></li>
                                    <li><Link class="dropdown-item" to="/json">Json</Link></li>
                                    <li><Link class="dropdown-item" to="/milestone">Table</Link></li>
                                    <li><Link class="dropdown-item" to="/getdata">Get Data</Link></li>
                                    <li><Link class="dropdown-item" to="/getEmpData">Emp</Link></li>
                                    <li><Link class="dropdown-item" to="/getUser">User</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}