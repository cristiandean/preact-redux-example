import { Component } from 'preact';
import { connect } from 'preact-redux';
import * as actions from '../../actions';
import reduce from '../../reducers';

@connect(reduce, actions)
export default class QuestionFooter extends Component {
	render({ question }) {
		return (
			<div className="question-footer">
				{this.props.answers && question.explanation && question.id in this.props.answers &&
					<div className="question-explanation">
						{question.explanation}
					</div>
				}
			</div>
		);
	}
}
