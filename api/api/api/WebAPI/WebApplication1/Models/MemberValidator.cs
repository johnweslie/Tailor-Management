using FluentValidation;

namespace WebApplication1.Models
{
    public class MemberValidator : AbstractValidator<Memberdetails>
    {
        /// <summary>  
        /// Validator rules for Product  
        /// </summary>  
        public MemberValidator()
        {
            

            RuleFor(x => x.Customer_name)
                .NotEmpty()
                .WithMessage("The Customer Name cannot be blank.");
                //.Length(0, 100)
                //.WithMessage("The Product Name cannot be more than 100 characters.");

            RuleFor(x => x.Age)
                .NotEmpty()
                .WithMessage("Please fill the Age.");
            RuleFor(x => x.Gender)
                .NotEmpty()
                .WithMessage("Please Select Gender.");
            RuleFor(x => x.Phone_no)
                .NotEmpty()
                .WithMessage("Please enter phone no.");
            RuleFor(x => x.Material)
                .NotEmpty()
                .WithMessage("Please Select material.");
            RuleFor(x => x.Measurement)
                .NotEmpty()
                .WithMessage("Please fill Measurement.");
            RuleFor(x => x.Booking_date)
                .NotEmpty()
                .WithMessage("Please select Booking date.");
            RuleFor(x => x.Delivery_date)
                .NotEmpty()
                .WithMessage("Please select Expected Delivery Date.");
            RuleFor(x => x.Customer_address)
                .NotEmpty()
                .WithMessage("Please fill the Address.");

            //RuleFor(x => x.Gender).GreaterThan(0).WithMessage("The Product Price must be at greather than 0.");
        }
    }  
    

    
}