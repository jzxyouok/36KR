/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import TabNavigator from 'react-native-tab-navigator';

var Mess = require('./mess');

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    NavigatorIOS,
    TouchableHighlight,
    Image,
    TabBarIOS,
} from 'react-native';

var SYNavigator = React.createClass ({
    getInitialState: function () {
        return {
            selectedTab: 'Message'
        }
    },
    selectTab: function (tab) {
        this.setState({
            selectedTab: tab
        })
    },
    render : function () {
        return(
            // <TabBarIOS tintColor="#45b640" barTintColor="#F5F6F8">
            //    <TabBarIOS.Item
            //        icon = {require('image!message')}
            //        selectedIcon = {require('image!message_fill')}
            //        onPress = {() => this.selectTab('Message')}
            //        title = '新闻'
            //        selected = {this.state.selectedTab === 'Message'}
            //    >
            //        {this.addNavigator(Message, '新闻', require('image!plus'))}
            //    </TabBarIOS.Item>
            //    <TabBarIOS.Item
            //        icon = {require('image!contact')}
            //        selectedIcon = {require('image!contact_fill')}
            //        onPress = {() => this.selectTab('contact')}
            //        title = '融资'
            //        selected = {this.state.selectedTab === 'contact'}
            //    >
            //      {this.addNavigator(Mess, '融资', require('image!found_fill'))}
            //    </TabBarIOS.Item>
            //</TabBarIOS>

            <TabNavigator
                navTintColor='ffffff'
                navBarTintColor='333333'
                tabTintColor='orange'
                tabBarTintColor='333333'>
                <TabNavigator.Item
                selected={this.state.selectedTab === 'Message'}
                title="新闻"
                renderIcon={() => <Image source={require('image!message')} />}
                renderSelectedIcon={() => <Image source={require('image!message_fill')} />}
                //badgeText="1"
                onPress={() => this.setState({ selectedTab: 'Message' })}>
                    {this.addNavigator(Message, '新闻', require('image!plus'))}
                </TabNavigator.Item>
                <TabNavigator.Item
                selected={this.state.selectedTab === 'Contact'}
                title="融资"
                renderIcon={() => <Image source={require('image!contact')} />}
                renderSelectedIcon={() => <Image source={require('image!contact_fill')} />}
                onPress={() => this.setState({ selectedTab: 'Contact' })}
defaultTab>
                    {this.addNavigator(Mess, '融资', require('image!found_fill'))}
                </TabNavigator.Item>
            </TabNavigator>
        )
    },
    addNavigator: function (component, title, rightButtonIcon) {
        return(
            <NavigatorIOS
                style={styles.container}
                initialRoute = {{
                    title: title,
                    component: component,
                }}
                rightButtonIcon = {rightButtonIcon}
                configureScene={() => {
                    return NavigatorIOS.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    if(route.component) {
                        return <Component {...route.params} navigator={navigator} />
                    }
                }}
            />
        );
    }
});

var Message = React.createClass ({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var rowInfo = [{
                author: 'Samsun',
                authorIcon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2044316434,1110760480&fm=116&gp=0.jpg',
                time: '27分钟前',
                category: '大公司',
                title: 'UC推出新媒体平台，阿里再次布局内容生态',
                commentNum: '1115',
                contentImage: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2652453787,3908676136&fm=116&gp=0.jpg'
            },
            {
                author: 'Echo',
                authorIcon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2264218307,3618225719&fm=116&gp=0.jpg',
                time: '1小时前',
                category: '早期项目',
                title: 'P2P模式的租车公司Drivy获3500万美元融资',
                commentNum: '0',
                contentImage: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1843325743,3380403034&fm=116&gp=0.jpg'
            },
            {
                author: 'Samsun',
                authorIcon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2044316434,1110760480&fm=116&gp=0.jpg',
                time: '27分钟前',
                category: '大公司',
                title: 'UC推出新媒体平台，阿里再次布局内容生态',
                commentNum: '1115',
                contentImage: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2652453787,3908676136&fm=116&gp=0.jpg'
            },
            {
                author: 'Echo',
                authorIcon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2264218307,3618225719&fm=116&gp=0.jpg',
                time: '1小时前',
                category: '早期项目',
                title: 'P2P模式的租车公司Drivy获3500万美元融资',
                commentNum: '0',
                contentImage: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1843325743,3380403034&fm=116&gp=0.jpg'
            },
            {
                author: 'Samsun',
                authorIcon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2044316434,1110760480&fm=116&gp=0.jpg',
                time: '27分钟前',
                category: '大公司',
                title: 'UC推出新媒体平台，阿里再次布局内容生态',
                commentNum: '1115',
                contentImage: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2652453787,3908676136&fm=116&gp=0.jpg'
            },
            {
                author: 'Echo',
                authorIcon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2264218307,3618225719&fm=116&gp=0.jpg',
                time: '1小时前',
                category: '早期项目',
                title: 'P2P模式的租车公司Drivy获3500万美元融资',
                commentNum: '0',
                contentImage: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1843325743,3380403034&fm=116&gp=0.jpg'
            }];
        return {
            dataSource: ds.cloneWithRows(rowInfo),
        };
    },
    render: function() {
        return (
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>this.renderRow(rowData)}
            />
        );
    },
    renderRow: function (rowData:string) {
        return (
            <TouchableHighlight onPress={this.press}>
                <View style={styles.wholeList}>
                    <View style={styles.listViewTop}>
                        <Image
                            style = {styles.listViewTop_icon}
                            source={{uri:rowData.authorIcon}}/>
                        <Text style={styles.listViewNameTime}>{rowData.author}</Text>
                        <Text style={styles.listViewNameTime}>{rowData.time}</Text>
                        <View style={styles.listViewCategory}>
                            <Text style={styles.listViewCategoryName}>{rowData.category}</Text>
                            <View style={styles.listViewTag}></View>
                        </View>
                    </View>
                    <View style={styles.listViewBottom}>
                        <View style={styles.listViewBottom_titleView}>
                            <Text style={styles.listViewBottom_title}>{rowData.title}</Text>
                            <View style = {styles.listViewBottom_commentView}>
                                <Image
                                    style = {styles.listViewBottom_commentImage}
                                    source={require('./resource/reply.png')}/>
                                <Text style = {styles.listViewBottom_comment}> {rowData.commentNum}</Text>
                            </View>
                        </View>
                        <View style = {styles.listViewBottom_imageView}>
                            <Image
                                style = {styles.listViewBottom_image}
                                source={{uri:rowData.contentImage}}/>
                        </View>
                    </View>
                    <View style={styles.seperator}></View>
                </View>
            </TouchableHighlight>
        );
    },
    press: function () {
        var _me = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                title: '详情',
                component: SYSconedPage,
            })
        }
    }
});

var SYSconedPage = React.createClass({
    render:function() {
        return(
            <Message />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    listView: {
        flex: 1,
    },
    wholeList: {
        backgroundColor: '#F5FCFF',
        height: 120,
        paddingLeft: 10,
    },
    listViewTop: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    listViewNameTime: {
        marginTop: 10,
        marginLeft: 7,
        height: 20,
        fontSize: 12,
        color: 'gray',
        paddingTop: 4,
    },
    listViewCategory: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
    },
    listViewCategoryName: {
        marginTop: 10,
        marginRight: 5,
        fontSize: 12,
        height: 20,
        paddingTop: 4,
        color: 'purple',
    },
    listViewTag: {
        marginTop: 14,
        backgroundColor: 'red',
        width: 3,
        height: 13,
    },
    listViewTop_icon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    listViewBottom: {
        flex: 1,
        flexDirection: 'row',
    },
    listViewBottom_titleView: {
        flex: 1,
    },
    listViewBottom_title: {
        fontSize: 17,
    },
    listViewBottom_imageView: {
        width: 80,
        height: 70,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    listViewBottom_image: {
        flex: 1
    },
    listViewBottom_commentView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent :'flex-end',
        paddingTop: 11,
    },
    listViewBottom_commentImage: {
        width: 20,
        height: 18,
        resizeMode: Image.resizeMode.contain,
    },
    listViewBottom_comment: {

    },
    seperator: {
        height: 0.5,
        backgroundColor: '#d0d0d0',
    }
});

AppRegistry.registerComponent('SYListView', () => SYNavigator);
