import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native'

import Rulebook from './Rulebook';

export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			rulebookArray: [],
			rulebookText: '',
		}
	}


    render() {

		let rulebooks = this.state.rulebookArray.map((val, key) => {
			return <Rulebook key={key} keyval={key} val={val}
					deleteMethod = { () => this.deleteRulebook(key) } 
					openRulesMethod = { () => this.openRulebook(key) }
					/>

		})


        return (
            <View style={styles.container}>
				
				<View style={styles.header}>
                    <Text style={styles.headerText}>– RULEBOOKS –</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>

					{rulebooks}

				</ScrollView>

                <View style={styles.footer}>
					<TextInput 
						style={styles.textInput} 
						onChangeText = {(rulebookText) => this.setState({rulebookText})}
						value = {this.state.rulebookText}
							
						placeholder='>rulebook' placeholderTextColor='white' underlineColorAndroid='transparent'>

					</TextInput>
				</View>

				<TouchableOpacity onPress = {this.addRulebook.bind(this)} style={styles.addButton}>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
				
            </View>
        );
	}
	  
	addRulebook() {

		if (this.state.rulebookText) {
			var d = new Date();
			this.state.rulebookArray.push({
				'date': d.getFullYear() + "/" + 
				(d.getMonth() + 1) + "/" +
				d.getDate(),

				'rulebook': this.state.rulebookText
			});
			this.setState({ rulebookArray: this.state.rulebookArray});
			this.setState({rulebookText: ''});
		} else {
			alert('Cannot add empty note.');
		}
	}

	deleteRulebook(key) {
		this.state.rulebookArray.splice(key, 1);
		this.setState({rulebookArray: this.state.rulebookArray})
	}

	openRulebook(key) {
		alert("rrules!")
	}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
	},
	header: {
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 10,
		borderBottomColor: '#ddd',
	},
	headerText: {
		color: 'white',
		fontSize: 18,
		padding: 26,
	},
	scrollContainer: {
		flex: 1,
		marginBottom: 100,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10,
	},
	textInput: {
		alignSelf: 'stretch',
		color: '#fff',
		padding: 20,
		backgroundColor: '#252525',
		borderTopWidth: 2,
		borderTopColor: 'grey',
	},
	addButton: {
		position: 'absolute',
		zIndex: 11,
		right: 20,
		bottom: 90,
		backgroundColor: 'blue',
		width: 90,
		height: 90,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 0,
	},
	addButtonText: {
		color: '#fff',
		fontSize: 24,

	}
})
