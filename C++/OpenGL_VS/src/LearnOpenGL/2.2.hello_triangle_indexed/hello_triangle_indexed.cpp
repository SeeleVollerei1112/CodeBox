#include <GLAD/glad.h>
#include <GLFW/glfw3.h>

#include <iostream>
#include <string>
#include <vector>

void framebuffer_size_callback(GLFWwindow *window, GLint width, GLint height);

void process_input(GLFWwindow *window);

const GLuint SRC_WIDTH = 800;
const GLuint SRC_HEIGHT = 600;

const char *vertexShaderSource = "#version 460 core\n"
                                 "layout (location = 0) in vec3 aPos;\n"
                                 "void main()\n"
                                 "{\n"
                                 "	gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);\n"
                                 ""
                                 "}\n\0";

const char *fragmentShaderSource = "#version 460 core\n"
                                   "out vec4 FragColor;\n"
                                   "void main()\n"
                                   "{\n"
                                   "   FragColor = vec4(1.0f, 0.5f, 0.2f, 1.0f);\n"
                                   "}\n\0";

int main()
{
    glfwInit();
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 6);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

#ifdef __APPLE__
    glfwWindowHint(GLFW_OPENGL_COMPAT_PROFILE, GL_TRUE);
#endif

    GLFWwindow *window = glfwCreateWindow(SRC_WIDTH, SRC_HEIGHT, "LearnOpenGL", nullptr, nullptr);
    if (window == nullptr)
    {
        std::cerr << "Failed to create GLFW window" << std::endl;
        glfwTerminate();

        return -1;
    }

    glfwMakeContextCurrent(window);
    glfwSetFramebufferSizeCallback(window, framebuffer_size_callback);

    if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
    {
        std::cerr << " Failed to initialize GLAD " << std::endl;

        return -1;
    }

    GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);
    glShaderSource(vertexShader, 1, &vertexShaderSource, nullptr);
    glCompileShader(vertexShader);

    GLint success;
    GLint vertexShaderLogLength;

    glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);

    if (!success)
    {
        glGetShaderiv(vertexShader, GL_INFO_LOG_LENGTH, &vertexShaderLogLength);
        std::vector<GLchar> VertexShaderLog(vertexShaderLogLength);
        glGetShaderInfoLog(vertexShader, vertexShaderLogLength, nullptr, VertexShaderLog.data());

        std::string vertexShaderLog(VertexShaderLog.begin(), VertexShaderLog.end());

        std::cerr << "ERROR::SHADER::VERTEX::COPLILATION_FAILED\n" << vertexShaderLog << std::endl;
    }

    GLint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
    glShaderSource(fragmentShader, 1, &fragmentShaderSource, nullptr);
    glCompileShader(fragmentShader);

    GLint fragmentShaderLogLength;

    glGetShaderiv(fragmentShader, GL_COMPILE_STATUS, &success);

    if (!success)
    {
        glGetShaderiv(fragmentShader, GL_INFO_LOG_LENGTH, &fragmentShaderLogLength);
        std::vector<GLchar> FragmentShaderLog(fragmentShaderLogLength);

        std::string fragmentShaderLog(FragmentShaderLog.begin(), FragmentShaderLog.end());

        std::cerr << "ERROR::SHADER::FRAGMENT::COPILICATION_FAILED\n" << fragmentShaderLog << std::endl;
    }

    GLuint shaderProgram = glCreateProgram();
    glAttachShader(shaderProgram, vertexShader);
    glAttachShader(shaderProgram, fragmentShader);

    glLinkProgram(shaderProgram);

    GLint shaderProgramLogLength;

    glGetProgramiv(shaderProgram, GL_LINK_STATUS, &success);

    if (!success)
    {
        glGetProgramiv(shaderProgram, GL_INFO_LOG_LENGTH, &shaderProgramLogLength);
        std::vector<GLchar> ShaderProgramLog(shaderProgramLogLength);
        glGetProgramInfoLog(shaderProgram, shaderProgramLogLength, nullptr, ShaderProgramLog.data());

        std::string shaderProgramLog(ShaderProgramLog.begin(), ShaderProgramLog.end());

        std::cerr << "ERROR::SHADER::PROGRAM::LINKING_FAILED\n" << shaderProgramLog << std::endl;
    }
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    float vertices[] = {-0.5f, -0.5f, 0.0f, 0.5f, -0.5f, 0.0f, 0.0f, 0.5f, 0.0f};

    GLuint VBO, VAO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);

    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void *)0);
    glEnableVertexAttribArray(0);

    glBindBuffer(GL_ARRAY_BUFFER, 0);

    glBindVertexArray(0);

    while (!glfwWindowShouldClose(window))
    {
        process_input(window);

        glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT);

        glUseProgram(shaderProgram);
        glBindVertexArray(VAO);
        glDrawArrays(GL_TRIANGLES, 0, 3);

        glfwSwapBuffers(window);
        glfwPollEvents();
    }
    glDeleteBuffers(1, &VBO);
    glDeleteVertexArrays(1, &VAO);

    glfwTerminate();

    return 0;
}

void framebuffer_size_callback(GLFWwindow *window, GLint width, GLint height)
{
    glViewport(0, 0, width, height);
}

void process_input(GLFWwindow *window)
{
    if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
    {
        glfwSetWindowShouldClose(window, true);
    }
}