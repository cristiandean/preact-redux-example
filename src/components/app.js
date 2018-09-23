import { Component } from 'preact';
import { connect } from 'preact-redux';
import * as actions from '../actions';
import reduce from '../reducers';
import QuizContainer from './quiz-container/quiz-container';

@connect(reduce, actions)
export default class App extends Component {

	updateAnswers = () => {
		this.props.updateAnswers({ questionId: 1, answerId: 1 });
	};

	render({ quiz }) {
		return (
			<div id="app">
				<QuizContainer quiz={quiz} />
			</div>
		);
	}
}
