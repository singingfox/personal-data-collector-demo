# Development - Iteration 6

<a name="1"></a>
## Save address to database upon data submission

- In Laravel, create a model ```Address```
- Set up $fillable in Model ```Address``` for the convenience of data saving
- In controller, Set up data validation before data saving 
- Set up saving logic and data to be returned (JSON for result success/failure, total count of records after saving the new one, and most recently saved record)

<a name="2"></a>
## Display of returned result - using a modal

- Create a basic modal to be invoked upon data submission
- Upon success submission: report total count of records and the most recently save record
- Upon failed submission: report the reason of failure as provided in the JSON data from Laravel API endpoint 
- Modal can be closed only by clicking on the Close X button on modal
- Screen blocker (behind modal) background color will be transitioned upon showing or hiding, to improve user experience

### Potential issue to be further looked into
Method ```hideModal()``` to hide/close modal is not working once called from within form submission method ```submit()```, and is now placed in submission button click event handler.



