import { Injectable } from '@nestjs/common';
import { ErroBadRequest } from 'src/utils/msg.response';
import openai from 'openai';


@Injectable()
export class OpenIaService {
  static async getResposta(data) {
    try {

      const apiOpenIa = new openai({
        apiKey: data.apiKey,
        organization: data.organization,
      });

      
      const response = await apiOpenIa.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: data.prompt,
          },
        ],
        temperature: 0,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      return response.choices[0].message;
    } catch (error) {
      return ErroBadRequest(error)
    }
  }
}
