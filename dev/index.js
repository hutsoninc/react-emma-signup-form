import EmmaSignupForm from '../dist'
import React from 'react'
import { render } from 'react-dom'

const el = document.createElement(`div`)
document.body.appendChild(el)

render(
    <div className="main">
        <h1>Emma Signup Form</h1>
        <EmmaSignupForm
            action="https://app.e2ma.net/app2/audience/signup/1876663/1743199/"
            groups={[
                3384671
            ]}
        >
            {({ error, loading, success }) => {
                return (
                    <div>
                        {!success && !loading &&
                            <div className="fields">
                                <input name="email" type="email" placeholder="Email" />
                                <input name="member_field_first-name" type="text" placeholder="First Name" />
                                <input name="member_field_last-name" type="text" placeholder="Last Name" />
                                <button>Submit</button>
                            </div>
                        }
                        {loading && <div>Loading...</div>}
                        {error && <div>Error.</div>}
                        {success && <div>Form submitted.</div>}
                    </div>
                )
            }}
        </EmmaSignupForm>
    </div>,
    el
)