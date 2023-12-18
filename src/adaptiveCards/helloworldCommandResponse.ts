export const helloWorldCard = {
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  type: "AdaptiveCard",
  version: "1.0",
  body: [
    {
      type: "TextBlock",
      size: "Medium",
      weight: "Bolder",
      text: " ${ParticipantInfoForm.title}",
      horizontalAlignment: "Center",
      wrap: true,
      style: "heading",
    },
    {
      type: "TextBlock",
      text: "Name",
      id: "Name",
      wrap: true,
    },
    {
      type: "Input.Text",
      style: "text",
      id: "Name",
    },
    {
      type: "TextBlock",
      text: "Start Date",
      wrap: true,
    },
    {
      type: "Input.Date",
      id: "StartDateVal",
      value: "2017-09-20",
    },
    {
      type: "TextBlock",
      text: "Due Date",
      wrap: true,
    },
    {
      type: "Input.Date",
      id: "DueDateVal",
      value: "2017-09-20",
    },
    {
      type: "TextBlock",
      text: "Start time",
      wrap: true,
    },
    {
      type: "Input.Time",
      id: "TimeVal",
      value: "16:59",
    },
    {
      type: "TextBlock",
      text: "Henees zuwshuurul awah",
      wrap: true,
    },
    {
      type: "Input.ChoiceSet",
      id: "MultiSelectVal",
      isMultiSelect: true,
      value: "1,3",
      choices: [
        {
          $data: "${Survey.questions[2].items}",
          title: "Alt-Undrakh",
          value: "Alt-Undrakh",
        },
      ],
    },
    {
      type: "ActionSet",
      actions: [
        {
          type: "Action.Execute",
          verb: "doStuff",
          title: "Submit",
          data: {
            id: "1234567822220",
          },
        },
      ],
    },
  ],
};
