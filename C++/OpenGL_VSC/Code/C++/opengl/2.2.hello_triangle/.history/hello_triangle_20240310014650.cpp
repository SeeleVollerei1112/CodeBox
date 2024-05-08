#include <GLAD/glad.h>
#include <GLFW/glfw3.h>

#include <iostream>
#include <string>
#include <vector>

void framebuffer_size_callback(GLFWwindow *window, int width, int height);

void process_input(GLFWwindow *window);

const unsigned int SCR_WIDTH = 800;
const unsigned int SCR_HEIGHT = 600;

const char *vertexShaderSource = "#version 460 core\n"
                                 "layout (location = 0) in vec3 aPos;\n"
                                 "void main()\n"
                                 "{\n"
                                 "   gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);\n"
                                 "}\n\0";

const char *fragmentShaderSource = "#version 460 core\n"
                                   "out vec4 FragColor;\n"
                                   "void main()\n"
                                   "{\ac"
                                   "   FragColor = vec4(1.0f, 0.5f, 0.2f, 1.0f);\n"
                                   "}\n\0";

int main()
{
    glfwInit();
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 6);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

#ifdef __APPLE__
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
#endif

    GLFWwindow *window = glfwCreateWindow(SCR_WIDTH, SCR_HEIGHT, "LearnOpenGL", nullptr, nullptr);
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
        std::cerr << "Failed to initialize GLAD" << std::endl;

        return -1;
    }

    // 构建并编译Shader程序
    //---------------------------------
    // vertex shader
    GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);
    glShaderSource(vertexShader, 1, &vertexShaderSource, nullptr);
    glCompileShader(vertexShader);

    // 检查编译错误
    GLint success;
    GLint vertexShaderLogLength;

    glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);

    if (!success)
    {
        glGetShaderiv(vertexShader, GL_INFO_LOG_LENGTH, &vertexShaderLogLength);
        std::vector<GLchar> vertexShaderLog(vertexShaderLogLength);
        glGetShaderInfoLog(vertexShader, vertexShaderLogLength, nullptr, vertexShaderLog.data());

        std::string VertexShaderLog(vertexShaderLog.begin(), vertexShaderLog.end());

        std::cerr << "ERROR::SHADER::VERTEX::COMPILATION_FAILED\n" << VertexShaderLog << std::endl;
    }

    // fragment shader
    GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
    glShaderSource(fragmentShader, 1, &fragmentShaderSource, nullptr);
    glCompileShader(fragmentShader);

    GLint FragmentShaderLogLength;

    glGetShaderiv(fragmentShader, GL_COMPILE_STATUS, &success);

    if (!success)
    {
        glGetShaderiv(fragmentShader, GL_INFO_LOG_LENGTH, &FragmentShaderLogLength);
        std::vector<GLchar> fragmentShaderLog(FragmentShaderLogLength);
        glGetShaderInfoLog(fragmentShader, FragmentShaderLogLength, nullptr, fragmentShaderLog.data());

        std::string FragmentShaderLog(fragmentShaderLog.begin(), fragmentShaderLog.end());

        std::cerr << "ERROR::SHADER::FRAGMENT::COMPILATION_FAILED\n" << FragmentShaderLog << std::endl;
    }

    // link shaders
    GLuint shaderPrograme = glCreateProgram();
    glAttachShader(shaderPrograme, vertexShader);
    glAttachShader(shaderPrograme, fragmentShader);

    glLinkProgram(shaderPrograme);

    GLint shaderProgrameLogLength;

    glGetProgramiv(shaderPrograme, GL_LINK_STATUS, &success);

    if (!success)
    {
        glGetProgramiv(shaderPrograme, GL_INFO_LOG_LENGTH, &shaderProgrameLogLength);
        std::vector<GLchar> programeLog(shaderProgrameLogLength);
        glGetProgramInfoLog(shaderPrograme, shaderProgrameLogLength, nullptr, programeLog.data());

        std::string shaderProgrameLog(programeLog.begin(), programeLog.end());

        std::cerr << "ERROR::SHADER::PROGRAM::LINKING_FAILED\n" << shaderProgrameLog << std::endl;
    }
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    // 设置顶点数据,缓冲区和顶点属性
    //---------------------------------
    float vertices[] = {
        -0.5f, -0.5f, 0.0f, // left
        0.5f,  -0.5f, 0.0f, // right
        0.0f,  0.5f,  0.0f  // top
    };

    GLuint VBO, VAO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);

    // 先绑定VAO, 再绑定VBO, 最后设置顶点属性
    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    // 设置顶点属性指针
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void *)0);
    glEnableVertexAttribArray(0);

    // 解绑VBO,VAO
    glBindBuffer(GL_ARRAY_BUFFER, 0);

    glBindVertexArray(0);

    while (!glfwWindowShouldClose(window))
    {
        process_input(window);

        glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT);

        glUseProgram(shaderPrograme);
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