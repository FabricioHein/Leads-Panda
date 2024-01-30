import { HttpException, HttpStatus } from '@nestjs/common';

export const ErroNotAceptable = (msg: string) => {
  throw new HttpException(
    {
      status: HttpStatus.NOT_ACCEPTABLE,
      msg: msg,
    },
    HttpStatus.NOT_ACCEPTABLE,
  );
};

export const ErroBadRequest = (msg: string) => {
  throw new HttpException(
    {
      status: HttpStatus.BAD_REQUEST,
      msg: msg,
    },
    HttpStatus.BAD_REQUEST,
  );
};

export const ForbiddenAceptable = (msg: string) => {
  throw new HttpException(
    {
      status: HttpStatus.FORBIDDEN,
      msg: msg,
    },
    HttpStatus.NOT_ACCEPTABLE,
  );
};

export const SucessAceptable = (msg: string) => {
 
  throw new HttpException(
    {
      status: HttpStatus.ACCEPTED,
      msg: msg,
    },
    HttpStatus.ACCEPTED,
  );
 
};
