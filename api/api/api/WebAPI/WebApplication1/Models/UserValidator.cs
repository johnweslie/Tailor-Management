using FluentValidation;

namespace WebApplication1.Models
{
    public class UserValidator : AbstractValidator<Userdetails>
    {
        /// <summary>  
        /// Validator rules for Product  
        /// </summary>  
        public UserValidator()
        {


            RuleFor(x => x.User_name)
                .NotEmpty()
                .WithMessage("The Customer Name cannot be blank.");
            //.Length(0, 100)
            //.WithMessage("The Product Name cannot be more than 100 characters.");

            RuleFor(x => x.Password)
                .NotEmpty()
                .WithMessage("Please fill the Password.");
            RuleFor(x => x.Role)
                .NotEmpty()
                .WithMessage("Please Select Role.");
            RuleFor(x => x.Gender)
                .NotEmpty()
                .WithMessage("Please Select Gender.");
            RuleFor(x => x.phone_no)
                .NotEmpty()
                .WithMessage("Please enter phone no.");
            RuleFor(x => x.User_DOB)
                .NotEmpty()
                .WithMessage("Please fill Date of birth.");
           
            RuleFor(x => x.User_Address)
                .NotEmpty()
                .WithMessage("Please fill the Address.");

            
        }
    }

}