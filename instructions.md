## Setup

- Form a pair (or more), with at least one person as the product owner and the other(s) as the QA engineers
- Build a registration feature that captures first name, last name, email, and password
- As the product owner, come up with requirements that you would like to see in the system
- As the QA engineer, turn the product owners requirements into acceptance tests
- Once the acceptance tests are completed, switch to developer mode and use ATDD to write **just enough** code in the fixture to pass the tests 

## Inspiration

As the product owner, don't let the QA just read these. Communicate these ideas in your own words.

"*" = difficulty

Email:
- Must include the company domain (*)
- Matches first and last name, and includes company domain (**)

Password:
- Between 8-16 characters (*)
- Between 8-16 characters, and contains a special character (**)
- Between 8-16 characters, contains a special character, and mixed casing (***)

### Optional

- Extract the fixture into a use case via TDD, and implement it into the provided UI
