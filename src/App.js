import React, { Component } from 'react';
import './App.css';
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a class="navbar-brand" href="/">WebSiteName</a>
                            </div>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="/"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="/"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div class="container-fluid">
                    <h2>Panels with Contextual Classes</h2>
                    <div class="panel panel-primary">
                        <div class="panel-heading">Danh sách phiên hỏi đáp</div>
                        <div class="panel-body bg-color">
                            <div class="dropdown mb-30">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a href="/">HTML</a></li>
                                    <li><a href="/">CSS</a></li>
                                    <li><a href="/">JavaScript</a></li>
                                </ul>
                            </div>
                            <div>
                                <div class="media mb-30 itembg-color pd-15">
                                    <div class="media-left">
                                        <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" alt="anh" class="media-object anh" />
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Left-aligned</h4>
                                        <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="media mb-30 itembg-color pd-15">
                                    <div class="media-left">
                                        <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" alt="anh" class="media-object anh" />
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Left-aligned</h4>
                                        <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="media mb-30 itembg-color pd-15">
                                    <div class="media-left">
                                        <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" alt="anh" class="media-object anh" />
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Left-aligned</h4>
                                        <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="media mb-30 itembg-color pd-15">
                                    <div class="media-left">
                                        <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" alt="anh" class="media-object anh" />
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Left-aligned</h4>
                                        <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <ul class="pager">
                                <li class="previous"><a href="/">Previous</a></li>
                                <li class="next"><a href="/">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <p>Footer</p>
                    <p>Footer</p>
                    <p>Footer</p>
                    <p>Footer</p>
                </footer>
            </React.Fragment>

        );
    }
}
export default App;
