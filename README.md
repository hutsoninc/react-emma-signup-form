# react-emma-signup-form

A React component for creating forms that post Emma Signup Form data. It does not require any API keys.

## Usage

### Requirements

- Email input name attribute must be "email"
- Other input name attributes must begin with "member\_field\_" and must end with your contact field
  - Example: A field named "First Name" will change to "first-name" and will have a name attribute of "member\_field\_first-name"
- Form action url must be: "https://app.e2ma.net/app2/audience/signup/<your-signup-id>/<your-account-id>/?r=signup"
- Make sure you have an input for each field required by your Emma form

### Usage Example

```jsx
<EmmaSignupForm
    action="https://app.e2ma.net/app2/audience/signup/1234567/0987654/?r=signup"
    groups={[
        2345678,
        9876543
    ]}
>
    {({ error, loading, success }) = {
        return (
            <div>
                {!success && !loading &&
                    <input name="email" type="email" placeholder="Email" />
                    <input name="member_field_first-name" type="text" placeholder="First Name" />
                    <input name="member_field_last-name" type="text" placeholder="Last Name" />
                    <button>Submit</button>
                }
                {loading && <div>Loading...</div>}
                {error && <div>Error.</div>}
                {success && <div>Form submitted.</div>}
            </div>
        )
    }}
</EmmaSignupForm>
```