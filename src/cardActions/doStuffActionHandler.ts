import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { TurnContext, InvokeResponse } from "botbuilder";
import {
  TeamsFxAdaptiveCardActionHandler,
  InvokeResponseFactory,
} from "@microsoft/teamsfx";
import responseCard from "../adaptiveCards/doStuffActionResponse.json";
import { CardData } from "../cardModels";

/**
 * The `DoStuffActionHandler` registers an action with the `TeamsFxBotActionHandler` and responds
 * with an Adaptive Card if the user clicks the Adaptive Card action with `triggerVerb`.
 */
export class DoStuffActionHandler implements TeamsFxAdaptiveCardActionHandler {
  /**
   * A global unique string associated with the `Action.Execute` action.
   * The value should be the same as the `verb` property which you define in your adaptive card JSON.
   */
  triggerVerb = "doStuff";

  async handleActionInvoked(
    context: TurnContext,
    actionData: any
  ): Promise<InvokeResponse> {
    /**
     * You can send an adaptive card to respond to the card action invoke.
     */
    console.log(actionData);
    const endpoint =
      "https://timeoff-service-testing-2lbj8qtmg-pinecone-studio.vercel.app/api/graphql";
    const query = `mutation Mutation($input: TimeoffRequest) {
        createTimeoffRequest(input: $input)
      }`;
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: {
            input: {
              assign: "Dull",
              date: "12",
              fullName: actionData.Name,
              hours: "9-14",
              leaveNote: "ywlaaa",
              requestType: "Hi",
              timeoffRequestReason: "OTHERS",
            },
          },
        }),
      })
        .then((res) => res.json())
        .then(({ data, errors }) => console.log({ data, errors }));
    } catch (err) {
      console.log(err);
    }

    const cardData: CardData = {
      title: "Timeoff Request",
      body: "Congratulations! Your request is sent successfully.",
    };

    const cardJson = AdaptiveCards.declare(responseCard).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);

    /**
     * If you want to send invoke response with text message, you can:
     * 
     return InvokeResponseFactory.textMessage("[ACK] Successfully!");
    */

    /**
     * If you want to send invoke response with error message, you can:
     *
     * return InvokeResponseFactory.errorResponse(InvokeResponseErrorCode.BadRequest, "The incoming request is invalid.");
     */
  }
}
