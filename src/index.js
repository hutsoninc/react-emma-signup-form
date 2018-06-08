import React from 'react';
import fetch from 'isomorphic-fetch';
import noop from './noop';

class EmmaSignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: false,
            success: false,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }
    
    async onSubmit(e) {
        e.preventDefault();

        this.setState({
            loading: true,
            error: false,
            success: false,
        });

        let data = new FormData(this.form);

		this.props.onSubmit(data);

		let res, body;

		try {
			res = await fetch(this.props.action, {
				method: `post`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
                    'Access-Control-Allow-Origin': '*',
                },
                body: data,
			});
		}
		catch(err) {
			return this.onError(`Connection error`);
        }
        
		if (res.status !== 200) {
			return this.onError(`Error: ${res.statusText}`);
        }
        
		try {
			body = await res.json();
        }
        catch(err) {
			return this.onError(`Error parsing JSON`);
        }
        
		if(body.status !== `success`) {
			return this.onError(body);
        }
        
		this.onSuccess();
    }

    onSuccess() {
        this.props.onSuccess();
        
		this.setState({
			loading: false,
			success: body,
			error: false,
		});
    }
    
	onError(err) {
        console.error(err);
        
        this.props.onError(err);
        
		return this.setState({
			loading: false,
			error: err,
			success: false,
		});
	}

    render() {
        return (
            <form
                ref={form => this.form = form}
                onSubmit={this.onSubmit}
                method="post"
                {...this.props}
            >
                <div style={{ display: `none` }}>
                    {this.props.groups && this.props.groups.map((group, key) => (
                        <input id={`id_group_${group}`} name={`group_${group}`} type="hidden" value={group} />
                    ))}
                    <input name="r" type="hidden" value="signup" />
                </div>

                {this.props.children(this.state)}
            </form>
        )
    }
}

EmmaSignupForm.defaultProps = {
	onSubmit: noop,
	onSuccess: noop,
	onError: noop,
}

export default EmmaSignupForm;