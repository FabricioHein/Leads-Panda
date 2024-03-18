import { Injectable } from '@nestjs/common';
import { ErroBadRequest } from 'src/utils/msg.response';
import OpenAIAPI from 'openai';


@Injectable()
export class OpenIaService {
  
  static async getResposta(message) {
    try {
      const apiOpenIa = new OpenAIAPI({
        apiKey: message.apiKey,
        organization: message.organization,
      });

      const response = await apiOpenIa.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: message.prompt,
          },
        ],
        temperature: 0,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      return response.choices[0].message.content;
    } catch (error) {
      return ErroBadRequest(error);
    }
  }
  }
