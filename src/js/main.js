'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//PAGE LOAD, SCROLL TOP

$(document).ready(function () {
    toggleLoading('', 3000);
    $('body').click(function () {
        removeReact();
    });
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

//CHECK IF MOBILE

// var isMobile = false; //initiate as false

// if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
//     || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
//     isMobile = true;
//     $('body').addClass('mobile');
// }

// if ($('body').hasClass('mobile')) {
//     console.log('mobile');
// }

//CHANGE PROJECT IMAGES


//LOADING SCREEN

function toggleLoading(click, time) {
    setTimeout(function () {
        $('#loading').toggleClass('active');
        $('body').toggleClass('stop-scrolling');
    }, time);

    if (click.className == 'dayNight') {

        setTimeout(function () {
            $('#loading').toggleClass('night');
        }, 2000);
        toggleLoading('', 3000);
    }
}

//SMOOTH SCROLL FUNCTION

var $root = $('html, body');

$('.scroll-to').click(function () {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

//MENU SCROLL FUNCTIONS

function changeMenu(thisLink, ballName) {

    var linkChange = $('a[href="' + '#' + thisLink + '"]');

    $(".scroll-to").removeClass("active");

    linkChange.addClass('active');

    $('#ball').removeClass();

    $('#ball').addClass(ballName);
}

var home_offset = $('#homeContAnchor').offset().top;
var work_offset = $('#workContAnchor').offset().top;
var about_offset = $('#aboutContAnchor').offset().top;
var flagCheck = false;
var reactCheck = true;

$(window).scroll(function () {
    var windowScroll = $(window).scrollTop();
    if (windowScroll >= work_offset && flagCheck === false) {
        changeMenu('workCont', 'ballWork');
        flagCheck = true;
    } else if (windowScroll >= about_offset && flagCheck === true) {
        changeMenu('aboutCont', 'ballAbout');

        $('#sub-menu').removeClass('react');
    } else if (windowScroll < about_offset && windowScroll <= home_offset && windowScroll <= work_offset) {
        changeMenu('homeCont', 'ballHome');

        removeReact();
    } else if (windowScroll < about_offset) {
        changeMenu('workCont', 'ballWork');

        setTimeout(function () {
            if (reactCheck == true) {
                $('#sub-menu').addClass('react');
                reactCheck = false;
            }
        }, 3000);
    }
});

//Close PROJECT FUNCTION

$('body').on('click', '.close', function () {
    $('#menuCheck').prop('checked', false);
    $('.clear-menu-btn').removeClass('close');
    $('.body-content').toggleClass('project');
});

//REMOVE REACT NOTIFICATION
$('#sub-menu').hover(function () {
    removeReact();
});

function removeReact() {
    $('#sub-menu').removeClass('react');
}

// SWITCH STYLESHEETS FUNCTION

$('#dayNight').click(function () {
    window.scrollTo(0, 0);
    $('body').toggleClass('dark');
});

// SCROLL FUNCTION
var viewCheck = true;
var $animation_elements = $('.animation-element');
var $window = $('#projectCont');

function check_if_in_view() {
    var windowScroll = $($window).scrollTop();

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_top_position = $element.offset().top;

        //check to see if this current container is within viewport
        if (windowScroll >= element_top_position - 450 && viewCheck == true) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$(function () {
    setTimeout(function () {
        ReactDOM.render(React.createElement(MyComponent, { context: $('body') }), document.getElementById('root'));
    }, 0);
});

var MyComponent = function (_React$Component) {
    _inherits(MyComponent, _React$Component);

    function MyComponent(props) {
        _classCallCheck(this, MyComponent);

        var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));

        _this.state = {
            context: props.context
        };

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(MyComponent, [{
        key: 'init',
        value: function init() {
            setTimeout(function () {
                this.changeImages('bmw', 4);
                console.log('changed');
            }, 3500);
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            // Get reference to a JQuery object in parent app.
            var projectCont = this.state.context.find('#projectCont');

            e.stopPropagation();
            var isProj = e.target.getAttribute('class').split(" ")[0];
            var proj = e.target.getAttribute('data-tag');

            if (isProj == 'block-info-overlay') {
                $('#menuCheck').prop('checked', true);
                $('.clear-menu-btn').addClass('close');
                $('.body-content').toggleClass('project');
                $('#projectCont').scrollTop(0);

                if (proj == 'bmw') {
                    projectCont.attr('class', 'project-overlay bmw');
                    this.changeImages(proj, 4);
                }

                if (proj == 'pop') {
                    projectCont.attr('class', 'project-overlay pop');
                }

                if (proj == 'crypto') {
                    projectCont.attr('class', 'project-overlay crypto');
                    this.changeImages(proj, 3);
                }

                if (proj == 'photo') {
                    projectCont.attr('class', 'project-overlay photo');
                    this.changeImages(proj, 3);
                }

                if (proj == 'face') {
                    projectCont.attr('class', 'project-overlay face');
                    this.changeImages(proj, 4);
                }
            }
        }
    }, {
        key: 'changeImages',
        value: function changeImages(change, amount) {
            const projImgs = [...document.querySelectorAll('.proj-img')]
              .slice(0, amount);
            projImgs.forEach((img, i) => {
              img.src = 'src/img/' + change + 'Slide' + (i + 1) + '.png';
            });
          }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'work-block flip-container', onClick: this.onClick },
                    React.createElement('img', { src: 'src/img/bmwBlock.png', className: 'block-img' }),
                    React.createElement(
                        'div',
                        { className: 'block-info-overlay bmw', 'data-tag': 'bmw' },
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'UX/UI Design'
                        ),
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'Web Design'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'work-block pop', onClick: this.onClick },
                    React.createElement('img', { src: 'src/img/popBlock.png', className: 'block-img' }),
                    React.createElement(
                        'div',
                        { className: 'block-info-overlay', 'data-tag': 'pop' },
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'UX/UI Design'
                        ),
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'HTML/CSS'
                        ),
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'JQuery'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'work-block', onClick: this.onClick },
                    React.createElement('img', { src: 'src/img/cryptoBlock.png', className: 'block-img' }),
                    React.createElement(
                        'div',
                        { className: 'block-info-overlay crypto', 'data-tag': 'crypto' },
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'UX/UI Design'
                        ),
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'HTML/CSS'
                        ),
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'Javascript'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'work-block channel', onClick: this.onClick },
                    React.createElement('img', { src: 'src/img/photoBlock.png', className: 'block-img' }),
                    React.createElement(
                        'div',
                        { className: 'block-info-overlay', 'data-tag': 'photo' },
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'Concept Creation'
                        ),
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'UX/UI Design'
                        ),
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'Web Design'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'work-block', onClick: this.onClick },
                    React.createElement('img', { src: 'src/img/faceBlock.png', className: 'block-img' }),
                    React.createElement(
                        'div',
                        { className: 'block-info-overlay', 'data-tag': 'face' },
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'Concept Creation'
                        ),
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'UX/UI Design'
                        ),
                        React.createElement(
                            'p',
                            { className: 'block-info' },
                            'Web Design'
                        )
                    )
                )
            );
        }
    }]);

    return MyComponent;
}(React.Component);

//ABOUT HOVER FUNCTION

function showAboutInfo() {
    $('#shapes').toggleClass('active');
}

$('.card-item').hover(function () {
    showAboutInfo();
});