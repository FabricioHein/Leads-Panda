import { Controller, Post, Get, Req, Res, HttpStatus } from '@nestjs/common';

@Controller('Webhook')
export class WebhookController {
  
  @Post('/*')
  handlePostRequest(@Req() req, @Res() res) {
    console.log("-------------- New Request POST --------------");
    console.log("Headers:"+ JSON.stringify(req.headers, null, 3));
    console.log("Body:"+ JSON.stringify(req.body, null, 3));



    res.json({ message: "Thank you for the message" });
  }

  @Get('/*')
  handleGetRequest(@Req() req, @Res() res) {
    // Parse the query params
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    console.log("-------------- New Request GET --------------");
    console.log("Headers:"+ JSON.stringify(req.headers, null, 3));
    console.log("Body:"+ JSON.stringify(req.body, null, 3));

    // Check if a token and mode is in the query string of the request
    if (mode && token) {
      // Check the mode and token sent is correct
      if (mode === "subscribe" && token === "12345") {
        // Respond with the challenge token from the request
        console.log("WEBHOOK_VERIFIED");
        res.status(HttpStatus.OK).send(challenge);
      } else {
        console.log("Responding with 403 Forbidden");
        // Respond with '403 Forbidden' if verify tokens do not match
        res.sendStatus(HttpStatus.FORBIDDEN);
      }
    } else {
      console.log("Replying Thank you.");
      res.json({ message: "Thank you for the message" });
    }
  }
}
