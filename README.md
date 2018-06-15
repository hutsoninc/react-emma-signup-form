# react-emma-signup-form

A React component for creating forms that post Emma Signup Form data. It does not require any API keys.

## Installation

With npm:

`npm install --save react-emma-signup-form`

## Usage

### Requirements

- Email input name attribute must be "email"
- Other input name attributes must begin with "member\_field\_" and must end with your contact field
  - Example: A field named "First Name" will change to "first-name" and will have a name attribute of "member\_field\_first-name"
- Form action url must be: "https://app.e2ma.net/app2/audience/signup/{your-signup-id}/{your-account-id}/"
- Make sure you have an input for each field required by your Emma form

For help finding the required input names and action URL, use [emma-signup-form-helper](https://github.com/hutsoninc/emma-signup-form-helper).

### Usage Example

```jsx
<EmmaSignupForm
    action="https://app.e2ma.net/app2/audience/signup/1234567/0987654/"
    groups={[
        2345678,
        9876543
    ]}
>
    {({ error, loading, success }) => {
        return (
            <div>
                {!success && !loading &&
                    <div>
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
```

## Authors

* **Austin Gordon** - *Development* - [GitHub](https://github.com/AustinLeeGordon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details