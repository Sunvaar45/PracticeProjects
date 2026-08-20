using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Entities.DTOs;
using Entities.Models;

namespace WebApi.Utilities.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<BookDtoForUpdate, Book>(MemberList.Destination)
                .ReverseMap();

            CreateMap<Book, BookDto>(MemberList.Destination);

            CreateMap<BookDtoForInsertion, Book>(MemberList.Destination)
                .ForMember(destination => destination.Id, options => options.Ignore());

            CreateMap<UserDtoForRegistration, User>(MemberList.Source)
                .ForSourceMember(source => source.Password, options => options.DoNotValidate())
                .ForSourceMember(source => source.Roles, options => options.DoNotValidate());
        }
    }
}