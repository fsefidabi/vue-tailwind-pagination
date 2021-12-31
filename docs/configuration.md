# Configuration

You can change the defined props and set them to your desired values to achieve your customized pagination.
Find the available props in the below table.

Required props and type of each prop are shown with <Badge text="required" type="error" vertical="middle" /> and <Badge text="Number" type="success" vertical="middle" /> badges, respectively.



| Name                 | Default value | Description                                                                                                                                                                                                                                                                                                                                                                 |
|:-------------------- |:------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| totalItemsCount      | -             | <Badge text="Number" type="success" vertical="middle" /> <Badge text="required" type="error" vertical="middle" /> The total number of rows (items) in your table. The Min value is 0. |
| itemsPerPage         | -             | <Badge text="Number" type="success" vertical="middle" /> <Badge text="required" type="error" vertical="middle" /> The number of rows (items) that will be shown in each page of the table. The Min value is 1. |
| siblingCount         | 2             | <Badge text="Number" type="success" vertical="middle" /> The number of digits to display either side of current page. The Min value is 1. |
| currentPage          | 1             | <Badge text="Number" type="success" vertical="middle" /> <Badge text="required" type="error" vertical="middle" /> The current page number. The Min value is 1. |
| hasFirstLastButtons  | true          | <Badge text="Boolean" type="success" vertical="middle" /> Defines if the pagination component should have the _go to first_ and _go to last_ pages icons. |
| hasNextPrevButtons   | true          | <Badge text="Boolean" type="success" vertical="middle" /> Defines if the pagination component should have the _previous_ and _next_ pages icons. |
| theme                | basic         | <Badge text="String" type="success" vertical="middle" /> Defines the pagination theme. The available themes are: `basic`, `rounded`, and `outlined`. While the basic theme has no background for pages numbers, the other two themes set background color. The `rounded` theme sets the fully rounded (circle) background, but the `outlined` theme sets a background with curvy corners. |
| disabledColor        | #a8a8a8       | <Badge text="String" type="success" vertical="middle" /> The color for disabled icons.           |
| iconColor            | #000          | <Badge text="String" type="success" vertical="middle" /> The color for active icons.            |
| activeColor          | #000          | <Badge text="String" type="success" vertical="middle" /> The color of active pages numbers.       |
| activeBorderColor    | transparent   | <Badge text="String" type="success" vertical="middle" /> The border color of active pages. It would only be added if you choose one of the `rounded` and `outlined` themes.        |
| activeBackgroundColor| transparent   | <Badge text="String" type="success" vertical="middle" /> The background color of active pages. It would only be added if you choose one of the `rounded` and `outlined` themes.        |
| inactiveColor        | #acacac       | <Badge text="String" type="success" vertical="middle" /> The color of inactive pages numbers.       |
| inactiveBorderColor  | transparent   | <Badge text="String" type="success" vertical="middle" /> The border color of inactive pages. It would only be added if you choose one of the `rounded` and `outlined` themes.        |
| inactiveBackgroundColor| transparent   | <Badge text="String" type="success" vertical="middle" /> The background color of inactive pages. It would only be added if you choose one of the `rounded` and `outlined` themes.        |


