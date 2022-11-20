var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CONFIGURACI�N BASE DE DATOS MYSQL
var url = "server=localhost;port=3306;user=root;password=admin;database=net_grupo1";
builder.Services.AddDbContext<AppDbContext>(
    options => options.UseMySql(url, ServerVersion.AutoDetect(url))
);

// A�ADIR REPOSITORIOS
builder.Services.AddScoped<ITaskDepartmentRepository, TaskDepartmentDbRepository>();
builder.Services.AddScoped<ITaskRepository, TaskDbRepository>();
builder.Services.AddScoped<IProjectRepository, ProjectDbRepository>();
builder.Services.AddScoped<IUserRepository, UserDbRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
