import { HttpException, HttpStatus } from '@nestjs/common';

export const ErroNotAceptable = (msg: string) => {
  throw new HttpException(
    msg,
    HttpStatus.NOT_ACCEPTABLE,
  );
};

export const ErroBadRequest = (msg: string) => {
  throw new HttpException(
    msg,
      HttpStatus.BAD_REQUEST,
  );
};

export const ForbiddenAceptable = (msg: string) => {
  throw new HttpException(
    msg,
    HttpStatus.NOT_ACCEPTABLE,
  );
};

export const SucessAceptable = (msg: string) => {
 
  throw new HttpException(
    msg,
    HttpStatus.ACCEPTED,
  );
 
};
