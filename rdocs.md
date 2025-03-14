## Project docs

This doc it's a basic structure of the app path and models. Not very exiting but useful to me.
And it's probably some words are in lenguages like catalan and spanish, sometimes I write ideas in my native languages ​​and then I don't remember to translate them. Sorry...

# Ideas or not

- index on chronicle tags to change the order in case you need to create a tag and add in middle of the past tags
- X component to notify the user (add toastify for feedback)
- X make more stronger the regex (add new email regex)
- X separate constant out of the components (add constants folder)
- Delete userTag and add in new tag all data default?
  Modify the tag creator to creator and editor form
  Make a modal input to add category data every time you need to add a new category on tags creator?

# Path

- check local storage. token?
  - yes → auto login
  - no → Login page. account?
    - yes → manual login
    - no → create account → auto login
  - fetch get (user data) → login return (user data) → save data on front
    - user data
      - name
      - id
      - chronicles basic data (name, id)
      - tags (complete)
- Menu nav

  - Link Chronicles → Chronicles page
  - Link Tags → Tags page

- **Chronicles page**

  - Chrolicles list
    - open chronicle → Chronicle page (id chronicle)
    - Search or Filters?

- Chronicle page

  - params id
  - fetch get (id) return (chronicle data)
  - Tags list (chronicle tags)
    - open tag → Expanded tag
      - Edit → Modal tag editor (tag data)
    - add tag → Modal tag library ( id chronicle)
  - Modal tag editor
    - Tag editor form (tag data)
    - fetch post (id tag, new tag data)
  - Modal tag library
    - Tags list (user tags + default tag)
      - default tag data
        - name : ""
        - color : #FFF
        - add category : [ ]
      - Select → Modal tag editor (tag data)

- **Tags page**
  - Tags list (user tags)
    - edit tag → Modal edit (id tag)
    - add tag → Modal create
    - elimina tag
      - fetch delete (id tag)
  - Modal edit tag
    - Tag creator form (tag data)
    - fetch post (id tag, new tag data)
    -
  - Modal create tag
    - Tag creator form (empty data)
      - empty data
        - name : ""
        - color : #FFF
        - add category : [ ]
    - fetch put (new tag data)

# Models

- user

  - id
  - name
  - mail
  - pass

- chronicle

  - id
  - author
  - name (unique)
  - tags : tag[]

- userTag

  - id
  - author
  - type (unique)
  - name
  - color
  - categories : [ {name, text} ]

- tag

  - id
  - author
  - name
  - color
  - title
  - resume
  - categories : [ {name, text} ]
  - description
